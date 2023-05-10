import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Image from 'next/image'
// import { useSession } from 'next-auth/react'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from '@/utils/formatDistanceToNow'
import { authOptions } from '../api/auth/[...nextauth].api'
import calcBookRate from '@/utils/calcBookRate'

import { SideBar } from '@/components/SideBar'
import { Avatar } from '@/components/Avatar'
import { StarsReview } from '@/components/StarsReview'
import { BookCard } from '@/components/BookCard'
import {
  BookDetails,
  Bookshelf,
  BoxLastReading,
  BoxRecentReviews,
  Container,
  Content,
  Feed,
  Header,
  RecentReading,
  RecentReviews,
  Spotlight,
  Subtitle,
  Summary,
  UserBox,
} from './styles'

type Review = {
  id: string
  rate: number
  description: string
  created_at: string
  user: {
    id: string
    name: string
    image: string | null
  }
  book: {
    id: string
    cover_url: string
    name: string
    author: string
  }
}

export type Book = {
  id: string
  name: string
  author: string
  cover_url: string
  summary: string
  total_pages: number
  rate: number
  categories: string[]
}

interface HomeProps {
  recentReviews: Review[]
  spotlight: Book[]
  lastReading: Book & { review_at: string }
}

export default function Home({
  recentReviews,
  spotlight,
  lastReading,
}: HomeProps) {
  // const session = useSession()

  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <ChartLineUp size={32} />
          <h1>Início</h1>
        </Header>
        <Bookshelf>
          <Feed>
            {lastReading && (
              <RecentReading>
                <Subtitle>
                  <h3>Sua última leitura</h3>
                  <Link href={`/`}>
                    Ver todas <CaretRight />
                  </Link>
                </Subtitle>

                <BoxLastReading>
                  <Image
                    src={lastReading.cover_url}
                    alt=""
                    width={108}
                    height={152}
                  />
                  <div style={{ flex: 1 }}>
                    <header>
                      <p>{formatDistanceToNow(lastReading.review_at)}</p>
                      <StarsReview rate={lastReading.rate} />
                    </header>

                    <h2>{lastReading.name}</h2>
                    <span>{lastReading.author}</span>
                    <Summary>
                      <p>{lastReading.summary}</p>
                    </Summary>
                  </div>
                </BoxLastReading>
              </RecentReading>
            )}
            <RecentReviews>
              <Subtitle>
                <h3>Avaliações mais recentes</h3>
              </Subtitle>
              {recentReviews.map((review) => (
                <BoxRecentReviews key={review.id}>
                  <header>
                    <UserBox>
                      <Avatar
                        href={`/users/${review.user.id}`}
                        src={review.user.image ?? ''}
                        size="sm"
                      />
                      <div>
                        <strong>{review.user.name}</strong>
                        <p>{formatDistanceToNow(review.created_at)}</p>
                      </div>
                    </UserBox>
                    <StarsReview rate={review.rate} />
                  </header>
                  <BookDetails>
                    <Image
                      src={review.book.cover_url}
                      alt=""
                      width={108}
                      height={152}
                    />
                    <div>
                      <h2>{review.book.name}</h2>
                      <span>{review.book.author}</span>

                      <p>{review.description}</p>
                    </div>
                  </BookDetails>
                </BoxRecentReviews>
              ))}
            </RecentReviews>
          </Feed>
          <Spotlight>
            <Subtitle>
              <h3>Destaques</h3>
              <Link href="/explorer">
                Ver todos <CaretRight />
              </Link>
            </Subtitle>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {spotlight.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </Spotlight>
        </Bookshelf>
      </Content>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  let lastReading = null
  if (session?.user) {
    const lastReadingUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        ratings: {
          orderBy: { created_at: 'desc' },
          take: 1,
          select: {
            book: {
              include: { ratings: true },
            },
            created_at: true,
          },
        },
      },
    })

    if (lastReadingUser) {
      const book = lastReadingUser.ratings[0].book
      lastReading = {
        id: book.id,
        name: book.name,
        author: book.author,
        cover_url: book.cover_url,
        summary: book.summary,
        review_at: String(new Date(lastReadingUser.ratings[0].created_at)),
        rate: calcBookRate(book.ratings.map((book) => book.rate)),
      }
    }
  }

  const recentReviewsData = await prisma.rating.findMany({
    select: {
      id: true,
      rate: true,
      description: true,
      created_at: true,
      user: { select: { name: true, image: true, id: true } },
      book: { select: { name: true, cover_url: true, id: true, author: true } },
    },
    orderBy: { created_at: 'desc' },
  })

  const recentReviews: Review[] = recentReviewsData.map((review) => {
    return {
      ...review,
      created_at: String(review.created_at),
    }
  })

  const spotlightData = await prisma.book.findMany({
    include: { ratings: true, categories: { include: { category: true } } },
    orderBy: {
      ratings: { _count: 'desc' },
    },
    take: 4,
  })

  const spotlight: Book[] = spotlightData.map((book) => {
    const categories = book.categories.map((category) => category.category.name)

    return {
      id: book.id,
      name: book.name,
      author: book.author,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      summary: book.summary,
      categories,
      created_at: String(book.created_at),
      rate: calcBookRate(book.ratings.map((book) => book.rate)),
    }
  })

  return {
    props: {
      recentReviews,
      spotlight,
      lastReading,
    },
  }
}

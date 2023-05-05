import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { CaretRight, ChartLineUp } from 'phosphor-react'

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
  UserBox,
} from './styles'
import { GetServerSideProps } from 'next'
import { prisma } from '@/lib/prisma'

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
  rate: number
}

interface HomeProps {
  recentReviews: Review[]
  spotlight: Book[]
}

export default function Home({ recentReviews, spotlight }: HomeProps) {
  const session = useSession()

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
            <RecentReading>
              <Subtitle>
                <h3>Sua última leitura</h3>
                <Link href="">
                  Ver todas <CaretRight />
                </Link>
              </Subtitle>

              <BoxLastReading>
                <Image
                  src="/images/books/entendendo-algoritmos.png"
                  alt=""
                  width={108}
                  height={152}
                />
                <div style={{ flex: 1 }}>
                  <header>
                    <p>Há 2 dias</p>
                    <StarsReview />
                  </header>

                  <h2>Entendendo Algoritmos</h2>
                  <span>Aditya Bhargava</span>

                  <p>
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu...
                  </p>
                </div>
              </BoxLastReading>
            </RecentReading>
            <RecentReviews>
              <Subtitle>
                <h3>Avaliações mais recentes</h3>
              </Subtitle>
              {recentReviews.map((review) => (
                <BoxRecentReviews key={review.id}>
                  <header>
                    <UserBox>
                      <Avatar src={review.user.image ?? ''} size="sm" />
                      <div>
                        <strong>{review.user.name}</strong>
                        <p>Hoje</p>
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
              <Link href="">
                Ver todos <CaretRight />
              </Link>
            </Subtitle>

            {spotlight.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </Spotlight>
        </Bookshelf>
      </Content>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
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
    include: { ratings: true },
    orderBy: {
      ratings: { _count: 'desc' },
    },
    take: 4,
  })

  const spotlight: Book[] = spotlightData.map((book) => {
    const rate =
      book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
      book.ratings.length

    return {
      id: book.id,
      name: book.name,
      author: book.author,
      cover_url: book.cover_url,
      rate,
    }
  })

  return {
    props: {
      recentReviews,
      spotlight,
    },
  }
}

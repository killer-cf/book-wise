import { useState } from 'react'
import Image from 'next/image'
import { BookOpen, BookmarkSimple, Books, User, UserList } from 'phosphor-react'
import { GetServerSideProps } from 'next'

import findMaxKey from '@/utils/findMaxKey'
import { formatDistanceToNow } from '@/utils/formatDistanceToNow'
import { prisma } from '@/lib/prisma'
import { SideBar } from '@/components/SideBar'
import { SearchInput } from '@/components/SearchInput'
import { StarsReview } from '@/components/StarsReview'
import { Avatar } from '@/components/Avatar'
import {
  BookCard,
  BookDetails,
  Container,
  Content,
  Header,
  InfoBox,
  ProfileHeader,
  Review,
  Reviews,
  ReviewsAndProfile,
  ReviewsWrapper,
  SearchForm,
  Spacer,
  UserInfo,
  UserProfile,
} from './styles'

type Rating = {
  id: string
  rate: number
  description: string
  created_at: string
  book: {
    name: string
    author: string
    cover_url: string
  }
}
interface ProfileProps {
  user: {
    name: string
    image: string
    mostReadCategory: string
    memberSize: number
    pagesRead: number
    booksReview: number
    authorsRead: number
  }
  ratings: Rating[]
}

export default function Profile({ user, ratings }: ProfileProps) {
  const [searchValue, setSearchValue] = useState('')

  const filteredRatings = ratings.filter(
    (rating) =>
      rating.book.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      rating.book.author
        .toLowerCase()
        .includes(searchValue.toLocaleLowerCase()),
  )

  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <User size={32} />
          <h1>Perfil</h1>
        </Header>
        <ReviewsAndProfile>
          <ReviewsWrapper>
            <SearchForm>
              <SearchInput
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Buscar livro avaliado"
              />
            </SearchForm>
            <Reviews>
              {filteredRatings.map((rating) => (
                <Review key={rating.id}>
                  <p>{formatDistanceToNow(rating.created_at)}</p>

                  <BookCard>
                    <div>
                      <Image
                        src={rating.book.cover_url}
                        alt={rating.book.name}
                        width={108}
                        height={152}
                      />
                      <BookDetails>
                        <div>
                          <h2>{rating.book.name}</h2>
                          <span>{rating.book.author}</span>
                        </div>
                        <StarsReview rate={rating.rate} />
                      </BookDetails>
                    </div>
                    <p>{rating.description}</p>
                  </BookCard>
                </Review>
              ))}
            </Reviews>
          </ReviewsWrapper>
          <UserProfile>
            <ProfileHeader>
              <Avatar src={user.image} size="lg" />
              <h3>{user.name}</h3>
              <p>membro desde {user.memberSize}</p>
            </ProfileHeader>
            <Spacer />
            <UserInfo>
              <InfoBox>
                <BookOpen size={32} />
                <div>
                  <h4>{user.pagesRead}</h4>
                  <p>Páginas lidas</p>
                </div>
              </InfoBox>

              <InfoBox>
                <Books size={32} />
                <div>
                  <h4>{user.booksReview}</h4>
                  <p>Livros avaliados</p>
                </div>
              </InfoBox>

              <InfoBox>
                <UserList size={32} />
                <div>
                  <h4>{user.authorsRead}</h4>
                  <p>Autores lidos</p>
                </div>
              </InfoBox>

              <InfoBox>
                <BookmarkSimple size={32} />
                <div>
                  <h4>{user.mostReadCategory}</h4>
                  <p>Categoria mais lida</p>
                </div>
              </InfoBox>
            </UserInfo>
          </UserProfile>
        </ReviewsAndProfile>
      </Content>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = String(params?.id)

  const userData = await prisma.user.findUnique({
    where: { id },
    include: {
      ratings: {
        orderBy: { created_at: 'desc' },
        select: {
          id: true,
          rate: true,
          description: true,
          created_at: true,
          book: {
            select: {
              name: true,
              author: true,
              cover_url: true,
              total_pages: true,
              categories: { include: { category: true } },
            },
          },
        },
      },
    },
  })

  if (!userData) {
    return {
      notFound: true,
    }
  }

  const memberSize = userData.created_at.getFullYear()

  const pagesRead = userData.ratings.reduce((acc, rating) => {
    acc = acc + rating.book.total_pages
    return acc
  }, 0)

  const booksReview = userData.ratings.reduce((acc: string[], rating) => {
    const book = rating.book.name
    if (!acc.includes(book)) {
      acc.push(book)
    }
    return acc
  }, []).length

  const authorsRead = userData.ratings.reduce((acc: string[], rating) => {
    const author = rating.book.author
    if (!acc.includes(author)) {
      acc.push(author)
    }
    return acc
  }, []).length

  type Rating = {
    [key: string]: number
  }

  const readCategories = userData.ratings.reduce((acc: Rating, rating) => {
    rating.book.categories.map((c) => {
      const category = c.category.name
      if (acc[category]) {
        return (acc[category] += 1)
      }

      return (acc[category] = 1)
    })
    return acc
  }, {})

  const user = {
    name: userData.name,
    image: userData.image,
    mostReadCategory: findMaxKey(readCategories),
    memberSize,
    pagesRead,
    booksReview,
    authorsRead,
  }

  const ratings = userData.ratings.map((rating) => {
    return {
      ...rating,
      created_at: String(rating.created_at),
      book: {
        name: rating.book.name,
        author: rating.book.author,
        cover_url: rating.book.cover_url,
      },
    }
  })
  console.log(ratings)

  return {
    props: {
      user,
      ratings,
    },
  }
}

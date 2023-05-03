import { useState } from 'react'
import { Binoculars } from 'phosphor-react'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import { prisma } from '@/lib/prisma'
import { StarsReview } from '@/components/StarsReview'
import { SearchInput } from '@/components/SearchInput'
import { SideBar } from '@/components/SideBar'
import { ReviewModal } from '@/components/ReviewModal'
import {
  Bookshelf,
  Container,
  Content,
  FilterButton,
  Filters,
  Header,
  Title,
  BookCard,
  BookDetails,
  SearchForm,
} from './styles'
export interface Book {
  id: string
  name: string
  author: string
  cover_url: string
  summary: string
  total_pages: number
  rate: number
  categories: string[]
  ratings: {
    id: string
    description: string
    rate: number
    created_at: string
    user: {
      id: string
      name: string
      image: string
    }
  }[]
}
interface ExplorerProps {
  books: Book[]
}

export default function Explorer({ books }: ExplorerProps) {
  const [filter, setFilter] = useState('Tudo')
  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <Title>
            <Binoculars size={32} />
            <h1>Explorar</h1>
          </Title>
          <SearchForm>
            <SearchInput placeholder="Buscar livro ou autor" />
          </SearchForm>
        </Header>

        <Filters>
          <FilterButton
            variant={filter === 'Tudo' ? 'selected' : 'unselected'}
            onClick={() => setFilter('Tudo')}
          >
            Tudo
          </FilterButton>
          <FilterButton
            variant={filter === 'Computação' ? 'selected' : 'unselected'}
            onClick={() => setFilter('Computação')}
          >
            Computação
          </FilterButton>
          <FilterButton
            variant={filter === 'Educação' ? 'selected' : 'unselected'}
            onClick={() => setFilter('Educação')}
          >
            Educação
          </FilterButton>
        </Filters>

        <Bookshelf>
          {books &&
            books.map((book: Book) => (
              <ReviewModal key={book.id} bookData={book}>
                <BookCard>
                  <Image src={book.cover_url} alt="" width={108} height={152} />
                  <BookDetails>
                    <div>
                      <h2>{book.name}</h2>
                      <span>{book.author}</span>
                    </div>
                    <StarsReview rate={book.rate} />
                  </BookDetails>
                </BookCard>
              </ReviewModal>
            ))}
        </Bookshelf>
      </Content>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const booksData = await prisma.book.findMany({
    include: {
      ratings: {
        include: { user: { select: { id: true, name: true, image: true } } },
      },
      categories: { include: { category: true } },
    },
  })

  const books = booksData.map((book) => {
    const rate =
      book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
      book.ratings.length

    const ratings = book.ratings.map((rating) => {
      return {
        id: rating.id,
        description: rating.description,
        rate: rating.rate,
        created_at: String(rating.created_at),
        user: rating.user,
      }
    })

    const categories = book.categories.map((category) => category.category.name)

    return {
      id: book.id,
      name: book.name,
      author: book.author,
      total_pages: book.total_pages,
      cover_url: book.cover_url,
      summary: book.summary,
      categories,
      ratings,
      rate,
    }
  })

  return {
    props: { books },
    revalidate: 60 * 60 * 24, // 1 dia
  }
}

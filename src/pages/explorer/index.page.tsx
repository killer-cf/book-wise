import { useState } from 'react'
import { Binoculars } from 'phosphor-react'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import { prisma } from '@/lib/prisma'
import { StarsReview } from '@/components/StarsReview'
import { SearchInput } from '@/components/SearchInput'
import { SideBar } from '@/components/SideBar'
import { ReviewModal } from '@/components/ReviewModal'
import { api } from '@/lib/axios'
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

export type Rating = {
  id: string
  description: string
  rate: number
  created_at: string
  user: {
    id: string
    name: string
    image: string
  }
}
export interface Book {
  id: string
  name: string
  author: string
  cover_url: string
  summary: string
  total_pages: number
  rate: number
  categories: string[]
}

export interface Category {
  id: string
  name: string
}
interface ExplorerProps {
  books: Book[]
  categories: Category[]
}

export default function Explorer({ books, categories }: ExplorerProps) {
  const [filter, setFilter] = useState('Tudo')
  const [filteredBooks, setFilteredBooks] = useState(![] || books)
  const [ratings, setRatings] = useState<Rating[]>([])

  async function getReviewsByBook(bookId: string) {
    const ratings = await api.get('/review', {
      params: {
        bookId,
      },
    })

    setRatings(ratings.data)
  }

  async function filterFetch(category: string) {
    const filteredBooks = await api.get(`/books/${category}`)
    setFilteredBooks(filteredBooks.data.books)
  }

  async function handleFilterBooks(category: string) {
    setFilter(category)
    filterFetch(category)
  }

  function handleRemoveFilter() {
    setFilter('Tudo')
    setFilteredBooks(books)
  }

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
            onClick={handleRemoveFilter}
          >
            Tudo
          </FilterButton>
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              variant={
                filter === `${category.name}` ? 'selected' : 'unselected'
              }
              onClick={() => handleFilterBooks(category.name)}
            >
              {category.name}
            </FilterButton>
          ))}
        </Filters>

        <Bookshelf>
          {filteredBooks.map((book: Book) => (
            <ReviewModal
              key={book.id}
              bookData={book}
              ratings={ratings}
              getRatings={getReviewsByBook}
            >
              <BookCard onClick={() => getReviewsByBook(book.id)}>
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
  const categories = await prisma.category.findMany()

  const booksData = await prisma.book.findMany({
    include: {
      ratings: true,
      categories: { include: { category: true } },
    },
  })

  const books = booksData.map((book) => {
    const rate =
      book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
      book.ratings.length

    const categories = book.categories.map((category) => category.category.name)

    return {
      id: book.id,
      name: book.name,
      author: book.author,
      total_pages: book.total_pages,
      cover_url: book.cover_url,
      summary: book.summary,
      categories,
      rate,
    }
  })

  return {
    props: { books, categories },
    revalidate: 60 * 60 * 24, // 1 dia
  }
}

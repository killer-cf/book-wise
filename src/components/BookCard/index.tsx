import Image from 'next/image'
import { BookDetails, Container } from './styles'
import { StarsReview } from '../StarsReview'
import { Book } from '@/pages/home/index.page'
import { ReviewModal } from '../ReviewModal'
import { useState } from 'react'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

interface BookCardProps {
  book: Book
}

type Rating = {
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

export function BookCard({ book }: BookCardProps) {
  const [bookId, setBookId] = useState('')

  const { data: ratings } = useQuery<Rating[]>(
    ['ratings', bookId],
    async () => {
      const response = await api.get('/review', {
        params: {
          bookId,
        },
      })
      return response.data
    },
  )

  async function getReviewsByBook(bookId: string) {
    setBookId(bookId)
  }

  return (
    <ReviewModal
      bookData={book}
      ratings={ratings}
      getRatings={getReviewsByBook}
    >
      <Container onClick={() => getReviewsByBook(book.id)}>
        <Image src={book.cover_url} alt="" width={64} height={94} />
        <BookDetails>
          <div className="description">
            <h2>{book.name}</h2>
            <span>{book.author}</span>
          </div>
          <StarsReview rate={book.rate} />
        </BookDetails>
      </Container>
    </ReviewModal>
  )
}

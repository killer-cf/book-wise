import Image from 'next/image'
import { BookDetails, Container } from './styles'
import { StarsReview } from '../StarsReview'
import { Book } from '@/pages/home/index.page'
import { ReviewModal } from '../ReviewModal'
import { useState } from 'react'
import { api } from '@/lib/axios'

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
  const [ratings, setRatings] = useState<Rating[]>([])

  async function getReviewsByBook(bookId: string) {
    const ratings = await api.get('/review', {
      params: {
        bookId,
      },
    })

    setRatings(ratings.data)
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

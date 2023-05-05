import Image from 'next/image'
import { BookDetails, Container } from './styles'
import { StarsReview } from '../StarsReview'
import { Book } from '@/pages/home/index.page'

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Container>
      <Image src={book.cover_url} alt="" width={64} height={94} />
      <BookDetails>
        <div>
          <h2>{book.name}</h2>
          <span>{book.author}</span>
        </div>
        <StarsReview rate={book.rate} />
      </BookDetails>
    </Container>
  )
}

import Image from 'next/image'
import { BookDetails, Container } from './styles'
import { StarsReview } from '../StarsReview'

export function BookCard() {
  return (
    <Container>
      <Image src="/images/books/o-hobbit.png" alt="" width={64} height={94} />
      <BookDetails>
        <div>
          <h2>O Hobbit</h2>
          <span>J.R.R. Tolkien</span>
        </div>
        <StarsReview />
      </BookDetails>
    </Container>
  )
}

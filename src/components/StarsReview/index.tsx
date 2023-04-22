import { Star } from 'phosphor-react'
import { Container } from './styles'

export function StarsReview() {
  return (
    <Container>
      <Star size={16} weight="fill" />
      <Star size={16} weight="fill" />
      <Star size={16} weight="fill" />
      <Star size={16} weight="fill" />
      <Star size={16} />
    </Container>
  )
}

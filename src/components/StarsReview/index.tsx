import { Star, StarHalf } from 'phosphor-react'
import { Container } from './styles'

interface Props {
  rate: number
}

export function StarsReview({ rate }: Props) {
  const totalStars = 5.0
  const activeStars = rate

  return (
    <Container>
      {[...Array(totalStars)].map((_, index) => {
        if (index + 1 <= activeStars) {
          return <Star key={index} size={16} weight="fill" />
        } else if (index === Math.floor(activeStars) && activeStars % 1 !== 0) {
          return <StarHalf key={index} size={16} weight="fill" />
        } else {
          return <Star key={index} size={16} />
        }
      })}
    </Container>
  )
}

import { Star, StarHalf } from 'phosphor-react'
import { Container } from './styles'
import { useState } from 'react'

export function StarsReview() {
  const totalStars = 5.0
  const [activeStars, setActiveStars] = useState(4.5)

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

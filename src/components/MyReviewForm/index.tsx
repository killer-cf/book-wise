import { Check, Star, X } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { Button, Container, StarsHate, UserBox } from './styles'
import { useState } from 'react'

interface MyReviewFormProps {
  closeFormReview: () => void
}

export function MyReviewForm({ closeFormReview }: MyReviewFormProps) {
  const totalStars = 5.0
  const [activeStars, setActiveStars] = useState(4)

  return (
    <Container>
      <header>
        <UserBox>
          <Avatar size="sm" />
          <strong>Jaxson Dias</strong>
        </UserBox>
        <StarsHate>
          {[...Array(totalStars)].map((_, index) => (
            <button
              type="button"
              onClick={() => setActiveStars(index + 1)}
              key={index}
            >
              {index + 1 <= activeStars ? (
                <Star size={28} weight="fill" />
              ) : (
                <Star size={28} />
              )}
            </button>
          ))}
        </StarsHate>
      </header>
      <textarea />
      <p>0/450</p>
      <div>
        <Button type="button" onClick={closeFormReview} color="purple">
          <X size={24} />
        </Button>
        <Button type="submit" color="green">
          <Check size={24} />
        </Button>
      </div>
    </Container>
  )
}

import { Check, Star, X } from 'phosphor-react'
import { Avatar } from '../Avatar'
import {
  Button,
  ButtonsAndErrors,
  Container,
  StarsHate,
  UserBox,
} from './styles'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { api } from '@/lib/axios'

const myReviewFormSchema = z.object({
  rate: z
    .number()
    .min(1, { message: 'Nota minima deve ser 1' })
    .max(5, { message: 'Avaliação invalida' }),
  description: z
    .string()
    .min(5, { message: 'Escreva um mínimo de 5 caracteres' })
    .max(450, { message: 'Você ultrapassou o máximo de caracteres' }),
})

type MyReviewFormData = z.infer<typeof myReviewFormSchema>

interface MyReviewFormProps {
  closeFormReview: () => void
  bookId: string
}

export function MyReviewForm({ closeFormReview, bookId }: MyReviewFormProps) {
  const totalStars = 5.0
  const [activeStars, setActiveStars] = useState(0)

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<MyReviewFormData>({
    resolver: zodResolver(myReviewFormSchema),
    defaultValues: {
      rate: activeStars,
    },
  })

  const session = useSession()
  const user = session.data?.user

  async function handleSendForm(data: MyReviewFormData) {
    try {
      await api.post('/review', {
        rate: data.rate,
        description: data.description,
        bookId,
      })
      closeFormReview()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container onSubmit={handleSubmit(handleSendForm)}>
      <header>
        <UserBox>
          <Avatar size="sm" src={user?.image!} />
          <strong>{user?.name}</strong>
        </UserBox>
        <StarsHate>
          {[...Array(totalStars)].map((_, index) => (
            <button
              type="button"
              onClick={() => {
                setActiveStars(index + 1)
                setValue('rate', index + 1, { shouldValidate: true })
              }}
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
      <textarea {...register('description')} />
      <p>0/450</p>
      <ButtonsAndErrors>
        <div>
          <p>{errors.description ? errors.description.message : ''}</p>
          <p>{errors.rate ? errors.rate.message : ''}</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button type="button" onClick={closeFormReview} color="purple">
            <X size={24} />
          </Button>
          <Button type="submit" color="green" disabled={isSubmitting}>
            <Check size={24} />
          </Button>
        </div>
      </ButtonsAndErrors>
    </Container>
  )
}

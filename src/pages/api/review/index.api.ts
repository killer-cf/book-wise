import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { authOptions } from '../auth/[...nextauth].api'

const myReviewFormSchema = z.object({
  rate: z
    .number()
    .min(1, { message: 'Nota minima deve ser 1' })
    .max(5, { message: 'Avaliação invalida' }),
  description: z
    .string()
    .min(5, { message: 'Escreva um mínimo de 5 caracteres' })
    .max(450, { message: 'Você ultrapassou o máximo de caracteres' }),
  bookId: z.string(),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions)

    const { description, rate, bookId } = myReviewFormSchema.parse(req.body)

    if (!session || !description || !rate || !bookId) {
      return res.status(401).end()
    }

    await prisma.rating.create({
      data: {
        description,
        rate,
        book_id: bookId,
        user_id: session.user?.id,
      },
    })

    return res.status(201).end()
  } else if (req.method === 'GET') {
    const bookId = String(req.query.bookId)

    const ratings = await prisma.rating.findMany({
      where: {
        book_id: bookId,
      },
      orderBy: { created_at: 'desc' },
      include: { user: { select: { id: true, name: true, image: true } } },
    })

    return res.status(200).json(ratings)
  } else {
    return res.status(405).end()
  }
}

import { prisma } from '@/lib/prisma'
import calcBookRate from '@/utils/calcBookRate'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  let category = String(req.query.category)

  if (category === 'Tudo') {
    category = ''
  }

  const booksData = await prisma.book.findMany({
    orderBy: { name: 'asc' },
    include: {
      ratings: true,
      categories: { include: { category: true } },
    },

    where: {
      categories: {
        some: {
          category: { name: { contains: category } },
        },
      },
    },
  })

  const books = booksData.map((book) => {
    const categories = book.categories.map((category) => category.category.name)

    return {
      id: book.id,
      name: book.name,
      author: book.author,
      total_pages: book.total_pages,
      cover_url: book.cover_url,
      summary: book.summary,
      categories,
      rate: calcBookRate(book.ratings.map((book) => book.rate)),
    }
  })

  return res.json({ books })
}

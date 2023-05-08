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

  const categoryName = String(req.query.category)
  const category = await prisma.category.findUnique({
    where: {
      name: categoryName,
    },
  })

  if (!category) {
    return res.status(400).json({ message: 'Category does not exist.' })
  }

  const booksData = await prisma.book.findMany({
    where: {
      categories: {
        some: { category },
      },
    },
    include: {
      ratings: true,
      categories: { include: { category: true } },
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

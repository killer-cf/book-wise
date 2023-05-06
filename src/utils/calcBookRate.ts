export default function calcBookRate(ratings: number[]) {
  const rate = ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
  return rate
}

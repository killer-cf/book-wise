export default function findMaxKey(obj: { [key: string]: number }): string {
  let maxKey = ''
  let maxValue = 0

  for (const key in obj) {
    if (obj[key] > maxValue) {
      maxKey = key
      maxValue = obj[key]
    }
  }

  return maxKey
}

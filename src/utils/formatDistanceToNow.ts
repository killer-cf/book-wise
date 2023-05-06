import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDistanceToNow(date: string | Date) {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: ptBR,
  })
}

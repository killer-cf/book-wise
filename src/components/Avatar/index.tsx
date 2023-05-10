import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  AvatarContainer,
  AvatarImage,
  AvatarFallback,
  AvatarLink,
} from './styles'

interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'xs' | 'sm' | 'lg' | undefined
  href: string
}

export function Avatar({ href, size = 'sm', ...rest }: AvatarProps) {
  return (
    <AvatarLink href={href} size={size}>
      <AvatarContainer size={size}>
        <AvatarImage {...rest} />

        <AvatarFallback size={size} delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </AvatarLink>
  )
}

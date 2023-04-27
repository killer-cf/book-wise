import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  AvatarContainer,
  AvatarImage,
  AvatarFallback,
  AvatarBorder,
} from './styles'

interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'sm' | 'lg' | undefined
}

export function Avatar({ size = 'sm', ...rest }: AvatarProps) {
  return (
    <AvatarBorder size={size}>
      <AvatarContainer size={size}>
        <AvatarImage {...rest} />

        <AvatarFallback size={size} delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </AvatarBorder>
  )
}

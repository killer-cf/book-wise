import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  AvatarContainer,
  AvatarImage,
  AvatarFallback,
  AvatarBorder,
} from './styles'

interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarBorder>
      <AvatarContainer>
        <AvatarImage {...props} />

        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </AvatarBorder>
  )
}

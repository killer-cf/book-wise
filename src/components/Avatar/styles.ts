import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../stitches.config'

export const AvatarBorder = styled('div', {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '$full',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: '$gradient-vertical',
})

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '2.28rem',
  height: '2.28rem',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '1.5rem',
    height: '1.5rem',
  },
})

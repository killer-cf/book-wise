import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../stitches.config'
import Link from 'next/link'

export const AvatarLink = styled(Link, {
  borderRadius: '$full',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: '$gradient-vertical',

  variants: {
    size: {
      xs: {
        width: '2rem',
        height: '2rem',
      },

      sm: {
        width: '2.5rem',
        height: '2.5rem',
      },

      lg: {
        width: '4.5rem',
        height: '4.5rem',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  variants: {
    size: {
      xs: {
        width: '1.78rem',
        height: '1.78rem',
      },

      sm: {
        width: '2.28rem',
        height: '2.28rem',
      },

      lg: {
        width: '4.28rem',
        height: '4.28rem',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
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

  variants: {
    size: {
      xs: {
        svg: {
          width: '1rem',
          height: '1rem',
        },
      },

      sm: {
        svg: {
          width: '1.5rem',
          height: '1.5rem',
        },
      },

      lg: {
        svg: {
          width: '2.5rem',
          height: '2.5rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})

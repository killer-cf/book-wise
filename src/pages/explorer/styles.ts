import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  maxWidth: '1440px',
  margin: '0 auto',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

export const Content = styled('div', {
  flex: 1,
  padding: '4rem 4.75rem',

  '@media screen and (max-width: 1224px)': {
    padding: '4rem 3%',
  },

  '@media (max-width: 768px)': {
    position: 'absolute',
    padding: '6rem 4%',
  },
})

export const Header = styled('header', {
  marginBottom: '$10',
  display: 'flex',
  justifyContent: 'space-between',
})

export const Title = styled('header', {
  display: 'flex',
  gap: '$3',

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
    lineHeight: '$short',
  },

  svg: {
    color: '$green100',
  },
})

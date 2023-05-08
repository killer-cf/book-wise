import { styled } from '../../../stitches.config'

export const Container = styled('button', {
  backgroundColor: '$gray700',
  display: 'flex',
  maxWidth: '20.25rem',
  border: '2px solid transparent',
  marginBottom: '$5',
  padding: '$4 $5',
  borderRadius: '$md',
  gap: '$5',
  alignItems: 'stretch',
  cursor: 'pointer',

  '@media screen and (max-width: 1024px)': {
    marginBottom: 0,
  },

  h2: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '$base',
    textAlign: 'left',
  },

  span: {
    display: 'inline-block',
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
    marginBottom: '$3',
  },

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start',

  '.description': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
})

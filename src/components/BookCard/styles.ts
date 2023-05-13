import { styled } from '../../../stitches.config'

export const Container = styled('button', {
  backgroundColor: '$gray700',
  display: 'flex',
  border: '2px solid transparent',
  padding: '$4 $5',
  borderRadius: '$md',
  gap: '$5',
  alignItems: 'stretch',
  cursor: 'pointer',

  h2: {
    color: '$gray100',
    fontSize: '$sm',
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

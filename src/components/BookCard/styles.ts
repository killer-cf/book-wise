import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  backgroundColor: '$gray700',
  display: 'flex',
  width: '20.25rem',
  marginBottom: '$5',
  padding: '$4 $5',
  borderRadius: '$md',
  gap: '$5',
  alignItems: 'stretch',

  h2: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '$base',
  },

  span: {
    display: 'inline-block',
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
    marginBottom: '$3',
  },
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
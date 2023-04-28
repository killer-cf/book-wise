import { styled } from '../../../stitches.config'

export const Container = styled('form', {
  width: '100%',
  backgroundColor: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  borderRadius: '$md',
  gap: '$5',
  marginBottom: '$3',
  position: 'relative',

  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  p: {
    display: 'block',
    position: 'absolute',
    top: '13.85rem',
    right: '2.125rem',
    color: '$gray400',
    fontSize: '$sm',
  },

  textarea: {
    backgroundColor: '$gray800',
    border: '1px solid $green200',
    height: '10.25rem',
    borderRadius: '$sm',
    resize: 'none',
    padding: '0.85rem $5',

    color: '$gray200',
    fontSize: '$sm',
    lineHeight: '$base',
  },

  '> div': {
    display: 'flex',
    justifyContent: 'end',
    gap: '$2',
  },
})

export const UserBox = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',

  strong: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '$short',
  },
})

export const StarsHate = styled('div', {
  display: 'flex',
  gap: '$1',

  button: {
    all: 'unset',
    cursor: 'pointer',
  },

  svg: {
    color: '$purple100',
  },
})

export const Button = styled('button', {
  backgroundColor: '$gray600',
  border: 0,
  width: '2.5rem',
  height: '2.5rem',
  cursor: 'pointer',
  borderRadius: '$sm',

  '&:not(disabled):hover': {
    backgroundColor: '$gray500',
  },

  variants: {
    color: {
      green: { color: '$green100' },
      purple: { color: '$purple100' },
    },
  },
})

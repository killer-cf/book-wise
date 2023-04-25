import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  flex: 1,
  display: 'flex',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  height: '3rem',
  alignItems: 'center',
  padding: '0.875rem $5',
  gap: '$3',

  '&:has(input:focus)': {
    borderColor: '$green200',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Input = styled('input', {
  flex: 1,
  background: 'transparent',
  border: 0,

  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray100',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export const ButtonSubmit = styled('button', {
  all: 'unset',
  cursor: 'pointer',

  svg: {
    color: '$gray500',
  },
})

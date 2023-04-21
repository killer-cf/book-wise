import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  display: 'flex',
})
export const SideBar = styled('aside', {
  margin: '$5 $5 $4',
  paddingTop: '$10',
  height: 'calc(100vh - 2.25rem)',
  width: '14.5rem',
  backgroundImage: "url('/images/background-sidebar.svg')",
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$md',
})

export const Links = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '4rem',

  div: {
    width: '4px',
    height: '24px',
  },

  a: {
    gap: '$3',
    display: 'flex',
    alignItems: 'center',

    fontSize: '$md',
    lineHeight: '$base',
    textDecoration: 'none',
    color: '$gray400',

    '&.active': {
      color: '$gray200',
      fontWeight: 'bold',

      div: {
        backgroundImage: '$gradient-vertical',
      },

      svg: {
        color: '$gray200',
      },
    },
  },

  svg: {
    color: '$gray400',
  },
})

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '$3',
  padding: '$5 $6',
  height: '4.5rem',
  border: 0,
  cursor: 'pointer',

  fontWeight: 'bold',
  fontSize: '$md',
  lineHeight: '$base',
  color: '$gray200',

  svg: {
    color: '$green100',
  },
})

export const Content = styled('div', {})

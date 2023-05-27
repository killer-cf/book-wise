import { styled } from '../../../stitches.config'

export const Container = styled('aside', {
  margin: '$5 0 $4 $5',
  paddingTop: '$10',
  height: 'calc(100vh - 2.25rem)',
  minWidth: '14.5rem',
  backgroundImage: "url('/images/background-sidebar.svg')",
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$md',

  '@media screen and (max-width: 1024px)': {
    width: '12.5rem',
    minWidth: '12.5rem',
  },

  '@media screen and (max-width: 768px)': {
    all: 'unset',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: "url('/images/background-sidebar.svg')",
    backgroundSize: 'cover',
    padding: '$4 $5',
    zIndex: 114,
  },
})

export const Links = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '4rem',

  div: {
    width: '4px',
    height: '24px',
    marginRight: '$1',
  },

  a: {
    gap: '$3',
    display: 'flex',
    alignItems: 'center',

    fontSize: '$md',
    lineHeight: '$base',
    textDecoration: 'none',
    color: '$gray400',

    '&:hover': {
      color: '$gray200',

      svg: {
        color: '$gray200',
      },
    },

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

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '$3',
  padding: '$5 $5',
  border: 0,
  cursor: 'pointer',

  fontWeight: 'bold',
  fontSize: '$md',
  lineHeight: '$base',
  color: '$gray200',

  svg: {
    color: '$green100',
  },

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const LogoutBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '$3',
  padding: '$5 $5',

  p: {
    color: '$gray200',
    fontSize: '$sm',
    lineHeight: '$base',
  },

  button: {
    all: 'unset',
    display: 'flex',
    alignContent: 'center',
    color: '#F75A68',
    cursor: 'pointer',
  },

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const MenuMobile = styled('button', {
  all: 'unset',
  display: 'none',
  position: 'absolute',
  top: '$4',
  right: '$5',
  cursor: 'pointer',

  svg: {
    color: '$gray200',
  },

  '@media (max-width: 768px)': {
    display: 'block',
  },
})

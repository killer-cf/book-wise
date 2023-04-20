import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',
  padding: '$5',
  flex: 1,
  maxWidth: '1440px',
  margin: '0 auto',
  height: '100vh',
})

export const ImageContainer = styled('div', {
  width: '40%',
  position: 'relative',

  img: {
    width: '100%',
  },
})

export const LoginContainer = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LoginBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '23.25rem',
})

export const Header = styled('div', {
  marginBottom: '$10',

  h2: {
    fontweight: 'bold',
    fontSize: '$2xl',
    lineHeight: '$short',
  },
  p: {
    fontSize: '$md',
    color: '$gray200',
    lineHeight: '$base',
  },
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '$5',
  marginBottom: '$4',
  padding: '$5 $6',
  width: '23.25rem',
  height: '4.5rem',
  backgroundColor: '$gray600',
  borderRadius: '$md',
  border: 0,
  cursor: 'pointer',

  fontWeight: 'bold',
  fontSize: '$lg',
  lineHeight: '$base',
  color: '$gray200',
})

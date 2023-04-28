import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../stitches.config'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
  zIndex: 115,
})

export const Content = styled(Dialog.Content, {
  minWidth: '32.25rem',
  backgroundColor: '$gray700',
  padding: '3.5rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '$md',

  position: 'fixed',
  top: '50%',
  left: ' 50%',
  transform: 'translate(-50%, -50%)',

  fontFamily: '$default',
  zIndex: 116,

  '@media screen and (max-width: 768px)': {
    minWidth: 'unset',
    maxWidth: '28rem',
    width: 'calc(100vw - 10%)',
  },
})

export const Title = styled(Dialog.Title, {
  color: '$gray200',
  fontSize: '$md',
  fontWeight: 'bold',
  lineHeight: '$short',
  marginBottom: '$10',

  '@media screen and (max-width: 768px)': {
    width: '70%',
    textAlign: 'center',
  },
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',

  svg: {
    color: '$gray300',
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

  '@media screen and (max-width: 768px)': {
    width: '100%',
  },
})

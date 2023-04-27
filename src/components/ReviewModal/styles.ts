import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../stitches.config'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const ContentWrapper = styled('div', {
  padding: '3rem',
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  zIndex: 111,
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$default',

  top: 0,
  right: 0,
  width: '41.25rem',
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.5)',
  height: '100%',

  '.ScrollAreaRoot': {
    width: '100%',
    overflow: 'hidden',
    flex: 1,
    '--scrollbar-size': '10px',
  },

  '.ScrollAreaViewport': {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
  },
  '.ScrollAreaScrollbar': {
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    padding: '2px',
    background: '$gray700',
    transition: 'background 2s ease-out',
  },

  '.ScrollAreaScrollbar:hover': { background: '$gray800' },

  ".ScrollAreaScrollbar[data-orientation='vertical']": {
    width: 'var(--scrollbar-size)',
  },

  '.ScrollAreaThumb': {
    flex: 1,
    background: '$gray600',
    borderRadius: 'var(--scrollbar-size)',
    position: 'relative',

    '&:hover': {
      background: '$green200',
      transition: 'background 0.2s ease-out',
    },
  },

  '.ScrollAreaThumb::before': {
    content: "''",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: '44px',
    minHeight: '44px',
  },
  '.ScrollAreaCorner': { background: '$green500' },
})

export const DialogClose = styled(Dialog.Close, {
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

export const BookCard = styled('div', {
  backgroundColor: '$gray700',
  display: 'flex',
  padding: '$6',
  borderRadius: '$md',
  marginBottom: '$6',
  gap: '$10',
  alignItems: 'stretch',
  flexDirection: 'column',

  '> div': {
    display: 'flex',
    gap: '$8',
  },

  h2: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '$base',
  },

  'p, span': {
    color: '$gray300',
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

  p: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const BookInfo = styled('div', {
  borderTop: '1px solid $gray600',
  padding: '$6 0',
})

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  paddingRight: '$3',

  svg: {
    color: '$green100',
  },

  strong: {
    color: '$gray200',
    fontSize: '$md',
    lineHeight: '$short',
  },

  p: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const Subtitle = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$3',

  h3: {
    color: '$gray200',
    fontSize: '$sm',
    fontWeight: 400,
    lineHeight: '$base',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    color: '$purple100',
    fontSize: '$md',
    fontWeight: 700,
    lineHeight: '$base',
    display: 'flex',
    alignItems: 'center',
  },
})

export const ReviewsList = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const Review = styled('div', {
  width: '100%',
  backgroundColor: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  borderRadius: '$md',
  gap: '$5',

  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  '> p': {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const UserBox = styled('div', {
  display: 'flex',
  gap: '$3',

  strong: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '$short',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

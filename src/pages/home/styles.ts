import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  maxWidth: '1440px',
  margin: '0 auto',
})

export const Content = styled('main', {
  flex: 1,
  padding: '4rem 4.75rem 6rem',
})

export const Header = styled('header', {
  marginBottom: '$10',
  display: 'flex',
  gap: '$3',

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
    lineHeight: '$short',
  },

  svg: {
    color: '$green100',
  },
})

export const Bookshelf = styled('div', {
  display: 'flex',
})

export const Feed = styled('div', {
  maxWidth: '38rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
})

export const Subtitle = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$4',

  h3: {
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: 400,
    lineHeight: '$base',
  },

  a: {
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: 700,
    lineHeight: '$base',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },
})

export const RecentReading = styled('section', {
  flex: 1,
})

export const BoxLastReading = styled('div', {
  backgroundColor: '$gray600',
  display: 'flex',
  padding: '$5 $6',
  borderRadius: '$md',
  gap: '$6',
  alignItems: 'flex-start',

  p: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '$3',
  },

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
    marginBottom: '$6',
  },
})

export const RecentReviews = styled('section', {
  paddingTop: '$10',
})

export const BoxRecentReviews = styled('div', {
  backgroundColor: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$4',
  padding: '$5 $6',
  borderRadius: '$md',
  gap: '$6',
  alignItems: 'flex-start',

  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export const UserBox = styled('div', {
  display: 'flex',
  gap: '$4',

  strong: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: 400,
    lineHeight: '$base',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const BookDetails = styled('div', {
  display: 'flex',
  flex: 1,
  gap: '$6',

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
    marginBottom: '$5',
  },

  p: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const Spotlight = styled('section', {
  width: '20.25rem',
  marginLeft: '3rem',
})

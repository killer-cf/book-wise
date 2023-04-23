import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  maxWidth: '1440px',
  margin: '0 auto',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

export const Content = styled('main', {
  flex: 1,
  padding: '4rem 4.75rem',

  '@media screen and (max-width: 1224px)': {
    padding: '4rem 3%',
  },

  '@media (max-width: 768px)': {
    position: 'absolute',
    padding: '6rem 4%',
  },
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
  justifyContent: 'space-between',

  '@media screen and (max-width: 1024px)': {
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
})

export const Feed = styled('div', {
  maxWidth: '38rem',
  minWidth: '28.75rem',
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
  maxWidth: '20.25rem',
  flex: 1,
  marginLeft: '3rem',

  '@media screen and (max-width: 1024px)': {
    maxWidth: '38rem',
    width: '100%',
    display: 'grid',
    gap: '$5',
    gridTemplateColumns: '1fr 1fr',
    marginLeft: 0,
    marginBottom: '$10',
  },
  [`${Subtitle}`]: {
    '@media screen and (max-width: 1024px)': {
      marginBottom: 0,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },

    '@media screen and (max-width: 524px)': {
      marginBottom: 0,
      gridColumnStart: 1,
      gridColumnEnd: 2,
    },
  },
  '@media screen and (max-width: 524px)': {
    gridTemplateColumns: '1fr',
  },
})

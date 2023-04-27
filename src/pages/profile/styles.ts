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
    width: '100%',
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

export const ReviewsAndProfile = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '@media screen and (max-width: 768px)': {
    flexDirection: 'column-reverse',
  },
})

export const ReviewsWrapper = styled('div', {
  flex: 1,
  marginRight: '$10',
  maxWidth: '39rem',

  '@media screen and (max-width: 1024px)': {
    marginRight: '$6',
  },

  '@media screen and (max-width: 768px)': {
    maxWidth: 'unset',
    width: '100%',
    marginRight: 0,
  },
})

export const SearchForm = styled('form', {})

export const Reviews = styled('div', {
  marginTop: '$8',
  gap: '$6',
})

export const Review = styled('div', {
  p: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
    marginBottom: '$2',
  },
})

export const BookCard = styled('div', {
  backgroundColor: '$gray700',
  display: 'flex',
  padding: '$6',
  borderRadius: '$md',
  marginBottom: '$6',
  gap: '$6',
  alignItems: 'stretch',
  flexDirection: 'column',

  '> div': {
    display: 'flex',
    gap: '$5',
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
})

export const UserProfile = styled('div', {
  width: '19.25rem',
  display: 'flex',
  alignSelf: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',
  borderLeft: '1px solid $gray700',

  '@media screen and (max-width: 1024px)': {
    width: '13.25rem',
  },

  '@media screen and (max-width: 768px)': {
    width: '100%',
    borderLeft: '1px solid transparent',
    // flexDirection: 'row-reverse',
    alignItems: 'start',
    marginBottom: '$8',
    justifyContent: 'start',
  },
})

export const ProfileHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  h3: {
    color: '$gray100',
    fontSize: '$lg',
    lineHeight: '$short',
    marginTop: '$5',
  },
  p: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
    marginBottom: '$2',
  },

  '@media screen and (max-width: 768px)': {
    width: 'unset',
  },
})

export const Spacer = styled('div', {
  width: 32,
  height: 4,
  borderRadius: '$full',
  backgroundImage: '$gradient-horizontal',

  '@media screen and (max-width: 768px)': {
    display: 'none',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'start',
  paddingLeft: '3.5rem',

  '@media screen and (max-width: 1024px)': {
    paddingLeft: '2rem',
  },

  '@media screen and (max-width: 768px)': {
    width: 'unset',
    paddingLeft: 0,
  },
})

export const InfoBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  margin: '$5 0',

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

  '@media screen and (max-width: 768px)': {
    margin: '$3 0',
  },
})

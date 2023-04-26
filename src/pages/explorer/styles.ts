import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  maxWidth: '1440px',
  margin: '0 auto',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

export const Content = styled('div', {
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
  justifyContent: 'space-between',
})

export const Title = styled('header', {
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

export const SearchForm = styled('form', {
  width: '27rem',

  '@media screen and (max-width: 1024px)': {
    width: '50%',
  },
})

export const Filters = styled('div', {
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
  marginBottom: '3rem',
})

export const FilterButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.125rem',
  padding: '$1 $3',
  borderRadius: '$full',

  fontSize: '$md',
  lineHeight: '$base',

  variants: {
    variant: {
      selected: {
        border: '1px solid transparent',
        backgroundColor: '$purple200',
        color: '$gray100',
      },

      unselected: {
        border: '1px solid $purple100',
        color: '$purple100',
      },
    },
  },

  defaultVariants: {
    variant: 'unselected',
  },
})

export const Bookshelf = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gridAutoFlow: 'row',
  gap: '$5',
})

export const BookCard = styled('div', {
  backgroundColor: '$gray700',
  display: 'flex',
  padding: '$4 $5',
  borderRadius: '$md',
  gap: '$5',
  alignItems: 'stretch',

  '@media screen and (max-width: 1024px)': {
    marginBottom: 0,
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
    marginBottom: '$3',
  },
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

import { MagnifyingGlass } from 'phosphor-react'
import { ButtonSubmit, Container, Input } from './styles'
import { ComponentProps } from 'react'

interface SearchInputProps extends ComponentProps<typeof Input> {
  disabled?: boolean
  onClickSearch?: () => void
}

export function SearchInput({
  onClickSearch,
  disabled,
  ...props
}: SearchInputProps) {
  return (
    <Container>
      <Input type="text" {...props} />
      <ButtonSubmit type="button" onClick={onClickSearch} disabled={disabled}>
        <MagnifyingGlass size={20} />
      </ButtonSubmit>
    </Container>
  )
}

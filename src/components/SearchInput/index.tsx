import { MagnifyingGlass } from 'phosphor-react'
import { ButtonSubmit, Container, Input } from './styles'
import { ComponentProps } from 'react'

interface SearchInputProps extends ComponentProps<typeof Input> {
  disabled?: boolean
}

export function SearchInput({ onClick, disabled, ...props }: SearchInputProps) {
  return (
    <Container>
      <Input {...props} />
      <ButtonSubmit type="submit" disabled={disabled}>
        <MagnifyingGlass size={20} />
      </ButtonSubmit>
    </Container>
  )
}

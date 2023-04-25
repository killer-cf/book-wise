import { Binoculars } from 'phosphor-react'

import { SearchInput } from '@/components/SearchInput'
import { SideBar } from '@/components/SideBar'
import { Container, Content, Header, Title } from './styles'

export default function Explorer() {
  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <Title>
            <Binoculars size={32} />
            <h1>Explorar</h1>
          </Title>
          <form style={{ width: '27.68rem' }}>
            <SearchInput />
          </form>
        </Header>
      </Content>
    </Container>
  )
}

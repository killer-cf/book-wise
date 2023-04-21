import { Container, Content } from './styles'
import { SideBar } from '@/components/SideBar'

export default function Home() {
  return (
    <Container>
      <SideBar />
      <Content></Content>
    </Container>
  )
}

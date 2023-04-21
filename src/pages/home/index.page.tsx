import Image from 'next/image'
import { Button, Container, Content, Links, SideBar } from './styles'
import Link from 'next/link'
import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <Container>
      <SideBar>
        <div>
          <Image
            src="/images/bookwise-logo.png"
            width={128}
            height={32}
            alt="bookwise logo"
          />

          <Links>
            <Link
              href="/home"
              className={router.pathname === '/home' ? 'active' : ''}
            >
              <div></div>
              <ChartLineUp size={24} />
              Início
            </Link>

            <Link
              href=""
              className={router.pathname === '/explorer' ? 'active' : ''}
            >
              <div></div>
              <Binoculars size={24} />
              Explorar
            </Link>
          </Links>
        </div>
        <Button>
          Fazer login
          <SignIn size={20} />
        </Button>
      </SideBar>
      <Content></Content>
    </Container>
  )
}

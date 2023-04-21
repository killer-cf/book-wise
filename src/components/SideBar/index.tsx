import Image from 'next/image'
import { Button, Container, Links } from './styles'
import Link from 'next/link'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'
import { useRouter } from 'next/router'

export function SideBar() {
  const router = useRouter()

  return (
    <Container>
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

          <Link
            href=""
            className={router.pathname === '/perfil' ? 'active' : ''}
          >
            <div></div>
            <User size={24} />
            Perfil
          </Link>
        </Links>
      </div>
      <Button>
        Fazer login
        <SignIn size={20} />
      </Button>
    </Container>
  )
}

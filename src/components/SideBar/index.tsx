import Image from 'next/image'
import { Button, Container, Links, MenuMobile } from './styles'
import Link from 'next/link'
import { Binoculars, ChartLineUp, List, SignIn, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function SideBar() {
  const router = useRouter()
  const [menu, setMenu] = useState('')

  function handleMenu() {
    setMenu(() => {
      const status = menu === 'flex' ? 'none' : 'flex'
      return status
    })
  }

  return (
    <Container>
      <div>
        <Image
          src="/images/bookwise-logo.png"
          width={128}
          height={32}
          alt="bookwise logo"
        />

        <Links style={{ display: `${menu}` }}>
          <Link
            href="/home"
            className={router.pathname === '/home' ? 'active' : ''}
          >
            <div></div>
            <ChartLineUp size={24} />
            Início
          </Link>

          <Link
            href="/explorer"
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
      <Button style={{ display: `${menu}` }}>
        Fazer login
        <SignIn size={20} />
      </Button>
      <MenuMobile onClick={handleMenu}>
        <List size={32} />
      </MenuMobile>
    </Container>
  )
}

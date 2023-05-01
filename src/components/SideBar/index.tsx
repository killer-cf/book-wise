import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import {
  Binoculars,
  ChartLineUp,
  List,
  SignIn,
  SignOut,
  User,
} from 'phosphor-react'

import { Avatar } from '../Avatar'
import { Button, Container, Links, LogoutBox, MenuMobile } from './styles'
import { LoginModal } from '../LoginModal'

export function SideBar() {
  const router = useRouter()
  const [menu, setMenu] = useState('')
  const session = useSession()

  const isAuthenticated = session.status === 'authenticated'

  function handleMenu() {
    setMenu(() => {
      const status = menu === 'flex' ? 'none' : 'flex'
      return status
    })
  }

  async function handleSignOut() {
    await signOut()
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

          {isAuthenticated && (
            <Link
              href="/profile"
              className={router.pathname === '/profile' ? 'active' : ''}
            >
              <div></div>
              <User size={24} />
              Perfil
            </Link>
          )}
        </Links>
      </div>
      {isAuthenticated ? (
        <LogoutBox>
          <Avatar size="xs" src={session.data.user?.image!} />
          <p>{session.data.user?.name}</p>
          <button onClick={handleSignOut}>
            <SignOut size={20} />
          </button>
        </LogoutBox>
      ) : (
        <LoginModal>
          <Button style={{ display: `${menu}` }}>
            Fazer login
            <SignIn size={20} />
          </Button>
        </LoginModal>
      )}

      <MenuMobile onClick={handleMenu}>
        <List size={32} />
      </MenuMobile>
    </Container>
  )
}

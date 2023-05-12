import { ReactNode } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { signIn } from 'next-auth/react'
import { X } from 'phosphor-react'

import { Button, Close, Content, Overlay, Title } from './styles'

interface LoginModalProps {
  children: ReactNode
}

async function handleLogin(provider: string) {
  signIn(provider, { callbackUrl: '/home' })
}

export function LoginModal({ children }: LoginModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Faça login para deixar sua avaliação</Title>

          <div>
            <Button onClick={() => handleLogin('google')}>
              <Image
                src="/images/google-icon.png"
                width={32}
                height={32}
                alt="google icon"
              />
              Entrar com Google
            </Button>
            <Button onClick={() => handleLogin('github')}>
              <Image
                src="/images/github-icon.png"
                width={32}
                height={32}
                alt="github icon"
              />
              Entrar com GitHub
            </Button>
          </div>
          <Close asChild>
            <button>
              <X size={24} />
            </button>
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

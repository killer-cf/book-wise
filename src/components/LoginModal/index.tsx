import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Button, Close, Content, Overlay, Title } from './styles'
import { X } from 'phosphor-react'
import Image from 'next/image'

interface LoginModalProps {
  children: ReactNode
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
            <Button>
              <Image
                src="/images/google-icon.png"
                width={32}
                height={32}
                alt="google icon"
              />
              Entrar com Google
            </Button>
            <Button>
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

import Image from 'next/image'
import {
  Button,
  Container,
  Header,
  ImageContainer,
  LoginBox,
  LoginContainer,
} from './styles'
import ÌmageIntro from 'public/images/intro.png'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  async function handleNavigateToHome() {
    await router.push('/home')
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={ÌmageIntro} alt="bookwise image" quality={100} priority />
      </ImageContainer>

      <LoginContainer>
        <LoginBox>
          <Header>
            <h2>Boas vindas!</h2>
            <p>Faça seu login ou acesse como visitante.</p>
          </Header>
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
          <Button onClick={handleNavigateToHome}>
            <Image
              src="/images/RocketLaunch.png"
              width={32}
              height={32}
              alt="rocketseat icon"
            />
            Acessar como visitante
          </Button>
        </LoginBox>
      </LoginContainer>
    </Container>
  )
}

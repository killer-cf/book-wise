import Link from 'next/link'
import Image from 'next/image'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import { SideBar } from '@/components/SideBar'
import { Avatar } from '@/components/Avatar'
import { StarsReview } from '@/components/StarsReview'
import {
  BookDetails,
  Bookshelf,
  BoxLastReading,
  BoxRecentReviews,
  Container,
  Content,
  Feed,
  Header,
  RecentReading,
  RecentReviews,
  Spotlight,
  UserBox,
} from './styles'

export default function Home() {
  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <ChartLineUp size={32} />
          <h1>Início</h1>
        </Header>
        <Bookshelf>
          <Feed>
            <RecentReading>
              <header>
                <h3>Sua última leitura</h3>
                <Link href="">
                  Ver todas <CaretRight />
                </Link>
              </header>

              <BoxLastReading>
                <Image
                  src="/images/books/entendendo-algoritmos.png"
                  alt=""
                  width={108}
                  height={152}
                />
                <div style={{ flex: 1 }}>
                  <header>
                    <p>Há 2 dias</p>
                    <StarsReview />
                  </header>

                  <h2>Entendendo Algoritmos</h2>
                  <span>Aditya Bhargava</span>

                  <p>
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu...
                  </p>
                </div>
              </BoxLastReading>
            </RecentReading>
            <RecentReviews>
              <h3>Avaliações mais recentes</h3>

              <BoxRecentReviews>
                <header>
                  <UserBox>
                    <Avatar />
                    <div>
                      <strong>Jaxson Dias</strong>
                      <p>Hoje</p>
                    </div>
                  </UserBox>
                  <StarsReview />
                </header>
                <BookDetails>
                  <Image
                    src="/images/books/o-hobbit.png"
                    alt=""
                    width={108}
                    height={152}
                  />
                  <div>
                    <h2>O Hobbit</h2>
                    <span>J.R.R. Tolkien</span>

                    <p>
                      Semper et sapien proin vitae nisi. Feugiat neque integer
                      donec et aenean posuere amet ultrices. Cras fermentum id
                      pulvinar varius leo a in. Amet libero pharetra nunc
                      elementum fringilla velit ipsum. Sed vulputate massa velit
                      nibh... ver mais
                    </p>
                  </div>
                </BookDetails>
              </BoxRecentReviews>

              <BoxRecentReviews>
                <header>
                  <UserBox>
                    <Avatar />
                    <div>
                      <strong>Jaxson Dias</strong>
                      <p>Hoje</p>
                    </div>
                  </UserBox>
                  <StarsReview />
                </header>
                <BookDetails>
                  <Image
                    src="/images/books/o-hobbit.png"
                    alt=""
                    width={108}
                    height={152}
                  />
                  <div>
                    <h2>O Hobbit</h2>
                    <span>J.R.R. Tolkien</span>

                    <p>
                      Semper et sapien proin vitae nisi. Feugiat neque integer
                      donec et aenean posuere amet ultrices. Cras fermentum id
                      pulvinar varius leo a in. Amet libero pharetra nunc
                      elementum fringilla velit ipsum. Sed vulputate massa velit
                      nibh... ver mais
                    </p>
                  </div>
                </BookDetails>
              </BoxRecentReviews>
            </RecentReviews>
          </Feed>
          <Spotlight></Spotlight>
        </Bookshelf>
      </Content>
    </Container>
  )
}

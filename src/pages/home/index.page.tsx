import Link from 'next/link'
import Image from 'next/image'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import { SideBar } from '@/components/SideBar'
import { Avatar } from '@/components/Avatar'
import { StarsReview } from '@/components/StarsReview'
import { BookCard } from '@/components/BookCard'
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
  Subtitle,
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
              <Subtitle>
                <h3>Sua última leitura</h3>
                <Link href="">
                  Ver todas <CaretRight />
                </Link>
              </Subtitle>

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
              <Subtitle>
                <h3>Avaliações mais recentes</h3>
              </Subtitle>
              <BoxRecentReviews>
                <header>
                  <UserBox>
                    <Avatar size="sm" />
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
                    <Avatar size="sm" />
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
          <Spotlight>
            <Subtitle>
              <h3>Destaques</h3>
              <Link href="">
                Ver todos <CaretRight />
              </Link>
            </Subtitle>

            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </Spotlight>
        </Bookshelf>
      </Content>
    </Container>
  )
}

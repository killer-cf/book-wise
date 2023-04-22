import Link from 'next/link'
import Image from 'next/image'
import { CaretRight, ChartLineUp, Star } from 'phosphor-react'

import { SideBar } from '@/components/SideBar'
import {
  Bookshelf,
  BoxLastReading,
  Container,
  Content,
  Feed,
  Header,
  RecentReading,
  RecentReviews,
  Spotlight,
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
                    <div>
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} />
                    </div>
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
            <RecentReviews></RecentReviews>
          </Feed>
          <Spotlight></Spotlight>
        </Bookshelf>
      </Content>
    </Container>
  )
}

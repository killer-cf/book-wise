import Image from 'next/image'
import { BookOpen, BookmarkSimple, Books, User, UserList } from 'phosphor-react'

import { SideBar } from '@/components/SideBar'
import { SearchInput } from '@/components/SearchInput'
import { StarsReview } from '@/components/StarsReview'
import {
  BookCard,
  BookDetails,
  Container,
  Content,
  Header,
  InfoBox,
  ProfileHeader,
  Review,
  Reviews,
  ReviewsAndProfile,
  ReviewsWrapper,
  SearchForm,
  Spacer,
  UserInfo,
  UserProfile,
} from './styles'
import { Avatar } from '@/components/Avatar'

export default function Profile() {
  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <User size={32} />
          <h1>Perfil</h1>
        </Header>
        <ReviewsAndProfile>
          <ReviewsWrapper>
            <SearchForm>
              <SearchInput placeholder="Buscar livro avaliado" />
            </SearchForm>
            <Reviews>
              <Review>
                <p>Há 2 dias</p>

                <BookCard>
                  <div>
                    <Image
                      src="/images/books/o-hobbit.png"
                      alt=""
                      width={108}
                      height={152}
                    />
                    <BookDetails>
                      <div>
                        <h2>O Hobbit</h2>
                        <span>J.R.R. Tolkien</span>
                      </div>
                      <StarsReview />
                    </BookDetails>
                  </div>
                  <p>
                    Tristique massa sed enim lacinia odio. Congue ut faucibus
                    nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                    Vitae fringilla ut et suspendisse enim suspendisse vitae.
                    Leo non eget lacus sollicitudin tristique pretium quam.
                    Mollis et luctus amet sed convallis varius massa sagittis.
                    Proin sed proin at leo quis ac sem. Nam donec accumsan
                    curabitur amet tortor quam sit. Bibendum enim sit dui lorem
                    urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis.
                    Aliquam amet integer pellentesque.
                  </p>
                </BookCard>
              </Review>

              <Review>
                <p>Há 2 dias</p>

                <BookCard>
                  <div>
                    <Image
                      src="/images/books/o-hobbit.png"
                      alt=""
                      width={108}
                      height={152}
                    />
                    <BookDetails>
                      <div>
                        <h2>O Hobbit</h2>
                        <span>J.R.R. Tolkien</span>
                      </div>
                      <StarsReview />
                    </BookDetails>
                  </div>
                  <p>
                    Tristique massa sed enim lacinia odio. Congue ut faucibus
                    nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                    Vitae fringilla ut et suspendisse enim suspendisse vitae.
                    Leo non eget lacus sollicitudin tristique pretium quam.
                    Mollis et luctus amet sed convallis varius massa sagittis.
                    Proin sed proin at leo quis ac sem. Nam donec accumsan
                    curabitur amet tortor quam sit. Bibendum enim sit dui lorem
                    urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis.
                    Aliquam amet integer pellentesque.
                  </p>
                </BookCard>
              </Review>
            </Reviews>
          </ReviewsWrapper>
          <UserProfile>
            <ProfileHeader>
              <Avatar size="lg" />
              <h3>Madson Kilder</h3>
              <p>membro desde 2023</p>
            </ProfileHeader>
            <Spacer />
            <UserInfo>
              <InfoBox>
                <BookOpen size={32} />
                <div>
                  <h4>3853</h4>
                  <p>Páginas lidas</p>
                </div>
              </InfoBox>

              <InfoBox>
                <Books size={32} />
                <div>
                  <h4>10</h4>
                  <p>Livros avaliados</p>
                </div>
              </InfoBox>

              <InfoBox>
                <UserList size={32} />
                <div>
                  <h4>8</h4>
                  <p>Autores lidos</p>
                </div>
              </InfoBox>

              <InfoBox>
                <BookmarkSimple size={32} />
                <div>
                  <h4>Computação</h4>
                  <p>Categoria mais lida</p>
                </div>
              </InfoBox>
            </UserInfo>
          </UserProfile>
        </ReviewsAndProfile>
      </Content>
    </Container>
  )
}

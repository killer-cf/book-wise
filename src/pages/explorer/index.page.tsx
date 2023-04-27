import { useState } from 'react'
import { Binoculars } from 'phosphor-react'
import Image from 'next/image'

import { StarsReview } from '@/components/StarsReview'
import { SearchInput } from '@/components/SearchInput'
import { SideBar } from '@/components/SideBar'
import { ReviewModal } from '@/components/ReviewModal'
import {
  Bookshelf,
  Container,
  Content,
  FilterButton,
  Filters,
  Header,
  Title,
  BookCard,
  BookDetails,
  SearchForm,
} from './styles'

export default function Explorer() {
  const [filter, setFilter] = useState('Tudo')

  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <Title>
            <Binoculars size={32} />
            <h1>Explorar</h1>
          </Title>
          <SearchForm>
            <SearchInput placeholder="Buscar livro ou autor" />
          </SearchForm>
        </Header>

        <Filters>
          <FilterButton
            variant={filter === 'Tudo' ? 'selected' : 'unselected'}
            onClick={() => setFilter('Tudo')}
          >
            Tudo
          </FilterButton>
          <FilterButton
            variant={filter === 'Computação' ? 'selected' : 'unselected'}
            onClick={() => setFilter('Computação')}
          >
            Computação
          </FilterButton>
          <FilterButton
            variant={filter === 'Educação' ? 'selected' : 'unselected'}
            onClick={() => setFilter('Educação')}
          >
            Educação
          </FilterButton>
        </Filters>

        <Bookshelf>
          <ReviewModal>
            <BookCard>
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
            </BookCard>
          </ReviewModal>

          <BookCard>
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
          </BookCard>

          <BookCard>
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
          </BookCard>

          <BookCard>
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
          </BookCard>

          <BookCard>
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
          </BookCard>

          <BookCard>
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
          </BookCard>

          <BookCard>
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
          </BookCard>
        </Bookshelf>
      </Content>
    </Container>
  )
}

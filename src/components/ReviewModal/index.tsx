import { BookOpen, BookmarkSimple, X } from 'phosphor-react'
import { ReactNode, useState } from 'react'
import Image from 'next/image'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Dialog from '@radix-ui/react-dialog'

import { StarsReview } from '../StarsReview'
import { Avatar } from '../Avatar'
import {
  BookCard,
  BookDetails,
  BookInfo,
  Box,
  ContentWrapper,
  DialogClose,
  DialogContent,
  DialogOverlay,
  Review,
  ReviewsList,
  Subtitle,
  UserBox,
} from './styles'
import { MyReviewForm } from '../MyReviewForm'
import { LoginModal } from '../LoginModal'

interface ReviewDialogProps {
  children: ReactNode
}

export function ReviewModal({ children }: ReviewDialogProps) {
  const [isFormReview, setIsFormReview] = useState(false)
  const isLogin = false

  function closeFormReview() {
    setIsFormReview(false)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <ScrollArea.Root className="ScrollAreaRoot">
            <ScrollArea.Viewport className="ScrollAreaViewport">
              <ContentWrapper>
                <BookCard>
                  <div>
                    <Image
                      src="/images/books/o-hobbit.png"
                      alt=""
                      width={172}
                      height={242}
                    />
                    <BookDetails>
                      <div>
                        <h2>O Hobbit</h2>
                        <span>J.R.R. Tolkien</span>
                      </div>
                      <div>
                        <StarsReview />
                        <p>3 avaliações</p>
                      </div>
                    </BookDetails>
                  </div>
                  <BookInfo>
                    <Box>
                      <BookmarkSimple size={32} />
                      <div>
                        <p>Categoria</p>
                        <h4>Computação, educação</h4>
                      </div>
                    </Box>

                    <Box>
                      <BookOpen size={32} />
                      <div>
                        <p>Páginas</p>
                        <h4>160</h4>
                      </div>
                    </Box>
                  </BookInfo>
                </BookCard>

                <Subtitle>
                  <h3>Avaliações</h3>
                  {!isFormReview && (
                    <>
                      {isLogin ? (
                        <button
                          type="button"
                          onClick={() => setIsFormReview(true)}
                        >
                          Avaliar
                        </button>
                      ) : (
                        <LoginModal>
                          <button>Avaliar</button>
                        </LoginModal>
                      )}
                    </>
                  )}
                </Subtitle>
                {isFormReview && (
                  <MyReviewForm closeFormReview={closeFormReview} />
                )}
                <ReviewsList>
                  <Review>
                    <header>
                      <UserBox>
                        <Avatar size="sm" />
                        <div>
                          <strong>Jaxson Dias</strong>
                          <p>Há 4 dias</p>
                        </div>
                      </UserBox>
                      <StarsReview />
                    </header>
                    <p>
                      Tristique massa sed enim lacinia odio. Congue ut faucibus
                      nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                      Vitae fringilla ut et suspendisse enim suspendisse vitae.
                    </p>
                  </Review>

                  <Review>
                    <header>
                      <UserBox>
                        <Avatar size="sm" />
                        <div>
                          <strong>Jaxson Dias</strong>
                          <p>Há 4 dias</p>
                        </div>
                      </UserBox>
                      <StarsReview />
                    </header>
                    <p>
                      Tristique massa sed enim lacinia odio. Congue ut faucibus
                      nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                      Vitae fringilla ut et suspendisse enim suspendisse vitae.
                    </p>
                  </Review>
                </ReviewsList>
              </ContentWrapper>
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar className="ScrollAreaScrollbar">
              <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>

            <ScrollArea.Corner className="ScrollAreaCorner" />
          </ScrollArea.Root>
          <DialogClose asChild>
            <button>
              <X size={24} />
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

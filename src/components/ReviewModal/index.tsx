import { BookOpen, BookmarkSimple, X } from 'phosphor-react'
import { ReactNode, useState } from 'react'
import Image from 'next/image'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Dialog from '@radix-ui/react-dialog'
import { useSession } from 'next-auth/react'

import { StarsReview } from '../StarsReview'
import { Avatar } from '../Avatar'
import { MyReviewForm } from '../MyReviewForm'
import { LoginModal } from '../LoginModal'
import { Book, Rating } from '@/pages/explorer/index.page'
import { formatDistanceToNow } from '@/utils/formatDistanceToNow'
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

interface ReviewDialogProps {
  children: ReactNode
  bookData: Book
  ratings: Rating[]
  getRatings: (bookId: string) => Promise<void>
}

export function ReviewModal({
  children,
  bookData,
  ratings,
  getRatings,
}: ReviewDialogProps) {
  const [isFormReview, setIsFormReview] = useState(false)
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'

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
                      src={bookData.cover_url}
                      alt=""
                      width={172}
                      height={242}
                    />
                    <BookDetails>
                      <div>
                        <h2>{bookData.name}</h2>
                        <span>{bookData.author}</span>
                      </div>
                      <div>
                        <StarsReview rate={bookData.rate} />
                        <p>
                          {ratings.length}{' '}
                          {ratings.length === 1 ? 'avaliação' : 'avaliações'}
                        </p>
                      </div>
                    </BookDetails>
                  </div>
                  <BookInfo>
                    <Box>
                      <BookmarkSimple size={32} />
                      <div>
                        <p>Categoria</p>
                        <h4>{bookData.categories.join(', ')}</h4>
                      </div>
                    </Box>

                    <Box>
                      <BookOpen size={32} />
                      <div>
                        <p>Páginas</p>
                        <h4>{bookData.total_pages}</h4>
                      </div>
                    </Box>
                  </BookInfo>
                </BookCard>

                <Subtitle>
                  <h3>Avaliações</h3>
                  {!isFormReview && (
                    <>
                      {isAuthenticated ? (
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
                  <MyReviewForm
                    getRatings={getRatings}
                    closeFormReview={closeFormReview}
                    bookId={bookData.id}
                  />
                )}
                <ReviewsList>
                  {ratings &&
                    ratings.map((review) => (
                      <Review key={review.id}>
                        <header>
                          <UserBox>
                            <Avatar size="sm" src={review.user.image} />
                            <div>
                              <strong>{review.user.name}</strong>
                              <p>{formatDistanceToNow(review.created_at)}</p>
                            </div>
                          </UserBox>
                          <StarsReview rate={review.rate} />
                        </header>
                        <p>{review.description}</p>
                      </Review>
                    ))}
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

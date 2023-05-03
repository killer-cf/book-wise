import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    image: string
  }

  interface Session {
    user: User
  }
}

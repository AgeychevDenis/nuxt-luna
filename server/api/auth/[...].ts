import { NuxtAuthHandler } from '#auth'
import { compare } from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'

import prisma from '~/lib/prisma'

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // @ts-expect-error
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        email: { label: 'E-Mail', type: 'text', placeholder: 'user@test.ru' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials: any) {
        if (!credentials) return null

        const values = {
          email: credentials.email,
        }

        const findUser = await prisma.user.findFirst({
          where: values,
        })

        if (!findUser) return null

        const isPasswordValid = await compare(credentials.password, findUser.password)

        if (!isPasswordValid) return null

        if (!findUser.verified) return null

        return {
          id: String(findUser.id),
          email: findUser.email,
          name: findUser.fullName,
          role: findUser.role,
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token }) {
      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email!,
        },
      })

      if (findUser) {
        token.id = String(findUser.id)
        token.email = findUser.email
        token.fullName = findUser.fullName
        token.role = findUser.role
      }

      return token
    },
    session({ session, token }) {
      if (session?.user) {
        // @ts-expect-error
        session.user.id = token.id
        // @ts-expect-error
        session.user.role = token.role
      }

      return session
    },
  },
})

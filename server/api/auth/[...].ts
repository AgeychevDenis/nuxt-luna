import { NuxtAuthHandler } from '#auth'
import { $Enums } from '@prisma/client'
import { compare, hashSync } from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'

import prisma from '~/lib/prisma'

interface Profile {
  id: string
  name: string
  email: string
  image: string
  role: $Enums.UserRole
  avatar_url: string
  login: string
}

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
      profile(profile: Profile) {
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: 'USER' as $Enums.UserRole,
        }
      },
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
          id: findUser.id,
          email: findUser.email,
          name: findUser.fullName,
          role: findUser.role,
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === 'credentials') {
          return true
        }

        if (!user.email) {
          return false
        }

        const findUser = await prisma.user.findFirst({
          where: {
            OR: [{ provider: account?.provider, providerId: account?.providerAccountId }, { email: user.email }],
          },
        })

        if (findUser) {
          await prisma.user.update({
            where: {
              id: findUser.id,
            },
            data: {
              provider: account?.provider,
              providerId: account?.providerAccountId,
            },
          })
          return true
        }

        await prisma.user.create({
          data: {
            email: user.email,
            fullName: user.name || 'User #' + user.id,
            password: hashSync(user.id.toString(), 10),
            verified: new Date(),
            provider: account?.provider,
            providerId: account?.providerAccountId,
          },
        })

        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
    async jwt({ token }) {
      if (!token.email) {
        return token
      }

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

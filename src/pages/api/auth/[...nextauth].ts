import KakaoProvider from 'next-auth/providers/kakao'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_ID,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: 'secret',
  },
  pages: {
    signIn: '/',
  },
  secret: process.env.SECRET,
})

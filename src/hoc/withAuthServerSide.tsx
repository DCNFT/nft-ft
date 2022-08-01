import React from 'react'
import cookies from 'next-cookies'
import axios from 'lib'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getUserInfo } from 'lib/auth'
import { authActions } from 'store/auth'

export function withAuthServerSideProps(getServerSidePropsFunc?: Function) {
  return async (context: any) => {
    context.res.setHeader('set-cookie', '')
    const cookie = context.req ? context.req.headers.cookie : ''
    const nookie = cookies(context)
    axios.defaults.headers.common.Cookie = ''
    const accessToken = nookie['access_token']
    console.log('nookie= ', nookie)

    /* 토큰 세팅 */
    if (context.req && cookie) {
      axios.defaults.headers.common.Cookie = cookie
      const bearer = `Bearer ${accessToken}`

      axios.defaults.headers.common['Authorization'] = bearer
      if (nookie['refresh_token'])
        axios.defaults.headers.common['refresh'] = nookie['refresh_token']
    }

    const user = await getUser(context)
    if (getServerSidePropsFunc) {
      return { props: { user, data: await getServerSidePropsFunc(context, user) } }
    }
    return { props: { user, data: { props: { user } } } }
  }
}
/* getUser */
async function getUser(content: any) {
  const res = await getUserInfo()
  if (res.data && res.data.code === 200) {
    const { data: userInfo } = res.data
    return {
      id: '',
      username: userInfo.mem_username,
      email: userInfo.mem_email,
    }
  }
  return null
}

// withAuthComponent.tsx
export function withAuthComponent(Component: any) {
  return ({ user, data }: { user: any; data: any }) => {
    if (!user) {
      return <h1>Denied</h1> // or redirect, we can use the Router because we are client side here
    }
    return <Component {...data.props} />
  }
}

export const withAuthComponentToLogin = (Component: any) => {
  return ({ user, data }: { user: any; data: any }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    console.log(user)

    if (!user) {
      return <Component {...data.props} />
    }
    if (user) {
      dispatch(
        authActions.setAuth({
          accessToken: '',
          name: user.username,
          email: user.email,
        }),
      )
      router.push('/')
      console.log('Seo = ')
      return null
    }
  }
}

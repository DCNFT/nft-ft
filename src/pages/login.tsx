import { signIn, signOut, useSession } from 'next-auth/react'
import Page from 'components/Layout/Page'
import Login from 'views/Login'
import cookies from 'next-cookies'

const LoginPage = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  const handleSignout = () => {
    signOut()
  }

  const handleLoginKakako = () => {}
  console.log('session= ', session)
  return (
    <Page>
      <Login />
      {/* <div>
        {!session && (
          <ul>
            <li>
              <a
                href={'/api/auth/signin'}
                onClick={(e) => {
                  e.preventDefault()
                  signIn('kakao')
                }}
              >
                Kakao Sign in
              </a>
            </li>
            <li>
              <a
                href={'/api/auth/signin'}
                onClick={(e) => {
                  e.preventDefault()
                  signIn('google')
                }}
              >
                Google Sign in
              </a>
            </li>
          </ul>
        )}
        {session && <button onClick={handleSignout}> 로그아웃</button>}
      </div> */}
    </Page>
  )
}

export default LoginPage

export function requireAuthentication(gssp) {
  return async (context) => {
    const { req, res } = context
    const cokki = cookies(context)

    console.log(cokki)
    // if (!token) {
    //   // Redirect to login page
    //   return {
    //     redirect: {
    //       destination: '/admin/login',
    //       statusCode: 302,
    //     },
    //   }
    // }

    return await gssp(context) // Continue on to call `getServerSideProps` logic
  }
}

export const getServerSideProps = requireAuthentication((context) => {
  // Your normal `getServerSideProps` code here
  return { props: { data: null } }
})

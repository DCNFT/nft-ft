import { signIn, signOut, useSession } from 'next-auth/react'
import Page from 'components/Layout/Page'
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
      <button>구글로 로그인</button>
      <button>카카오로 로그인</button>
      <div>
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
      </div>
    </Page>
  )
}

export default LoginPage

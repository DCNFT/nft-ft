import { useRouter } from 'next/router'
import Button from 'components/Common/Button/Button'
import axios from 'axios'

const GoogleButton = () => {
  const router = useRouter()
  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3001/oauth/callback/google&scope=https://www.googleapis.com/auth/userinfo.email`

  const oAuthHandler = () => {
    window.location.assign(GOOGLE_LOGIN_URL)
  }
  return (
    <Button onClick={oAuthHandler}>
      <span>구글 로그인 </span>
    </Button>
  )
}

export default GoogleButton

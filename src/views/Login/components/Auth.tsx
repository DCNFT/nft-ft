import { useRouter } from 'next/router'
import Button from 'components/Common/Button/Button'

const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_ID
const REDIRECT_URI = 'http://localhost:3001/oauth/callback/kakao'
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoButton = () => {
  const router = useRouter()

  return (
    <Button onClick={() => router.push(KAKAO_AUTH_URL)}>
      <span>카카오계정 로그인</span>
    </Button>
  )
}

export default KakaoButton

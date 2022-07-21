import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
const AuthCallback = () => {
  const router = useRouter()

  useEffect(() => {
    const code = router.query.code
    console.log(code)
    if (code) {
      axios({
        method: 'GET',
        url: `http://localhost:3031/api/oauth/callback/kakao?code=${code}&snsType=kakao`,
      }).then((res) => {
        console.log(res)
        const ACCESS_TOKEN = res.data.accessToken

        localStorage.setItem('token', ACCESS_TOKEN) //예시로 로컬에 저장함

        router.replace('/') // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
    }
  }, [router])

  return <div>로그인중입니다. 잠시만 기다려주세요!</div>
}
export default AuthCallback

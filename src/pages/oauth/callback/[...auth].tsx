import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
const AuthCallback = () => {
  const router = useRouter()

  useEffect(() => {
    const authParams = router.query.auth
    const code = router.query.code

    console.log(code)
    if (code) {
      if (authParams?.length === 0) return
      const coperation = authParams[0]
      if (coperation === 'kakao') {
        axios({
          method: 'GET',
          url: `http://localhost:3031/api/oauth/callback/kakao?code=${code}`,
        }).then((res) => {
          console.log(res)
          const ACCESS_TOKEN = res.data.accessToken

          localStorage.setItem('token', ACCESS_TOKEN) //예시로 로컬에 저장함

          router.replace('/') // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        })
      }

      if (coperation === 'google') {
        axios({
          method: 'GET',
          url: `http://localhost:3031/api/oauth/callback/google?code=${code}`,
        }).then((res) => {
          console.log(res)
          const ACCESS_TOKEN = res.data.accessToken
          localStorage.setItem('token', ACCESS_TOKEN) //예시로 로컬에 저장함
          router.replace('/') // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        })
      }

      //...todo
      if (coperation === 'naver') {
      }
      //...todo
      if (coperation === 'apple') {
      }
    }
  }, [router])

  return <div>로그인중입니다. 잠시만 기다려주세요!</div>
}
export default AuthCallback

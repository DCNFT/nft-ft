import { useEffect } from 'react'
import { useRouter } from 'next/router'
const NaverButton = () => {
  const router = useRouter()
  const { naver } = window as any
  // const initializeNaverLogin = () => {
  //   const naverLogin = new naver.LoginWithNaverId({
  //     clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
  //     callbackUrl: 'http://localhost:3001/oauth/callback/naver',
  //     isPopup: false, // popup 형식으로 띄울것인지 설정
  //     loginButton: { color: 'white', type: 1, height: '24' }, //버튼의 스타일, 타입, 크기를 지정
  //   })
  //   naverLogin.init()
  // }

  // useEffect(() => {
  //   initializeNaverLogin()
  // }, [])
  const handle = () => {
    router.push('https://nid.naver.com/oauth2.0/authorize')
  }
  return <button onClick={handle}>네이버로그인 </button>
}

export default NaverButton

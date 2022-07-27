import Auth from './components/Auth'
import GoolgeButton from './components/GoogleButton'
import NaverButton from './components/NaverButton'
import { test } from 'lib/auth'
const Login = () => {
  const handleCookie = async () => {
    const res = await test()
    console.log('rese= ', res)
  }
  return (
    <div>
      <Auth />
      <GoolgeButton />
      <NaverButton />
      <button onClick={handleCookie}>쿠키테스트 </button>
    </div>
  )
}
export default Login

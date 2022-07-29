import Page from 'components/Layout/Page'
import Login from 'views/Login'
import { withAuthComponentToLogin, withAuthServerSideProps } from 'hoc/withAuthServerSide'

const LoginPage = (props) => {
  console.log('hello', props)

  return (
    <Page>
      <Login />
    </Page>
  )
}

export default withAuthComponentToLogin(LoginPage)

export const getServerSideProps = withAuthServerSideProps()

import { useNaviState } from 'store/navi/hooks'
import { AppDispatch } from 'store'
import { setPath } from 'store/navi/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, useModal } from 'components/Common/Modal'
import Button from 'components/Common/Button/Button'
import Page from 'components/Layout/Page'
declare global {
  interface Window {
    web3: any
  }
}

const TestModal = () => {
  return <Modal title="test modal">Hello modal</Modal>
}
const IndexPage = ({ theme }) => {
  const dispatch = useDispatch<AppDispatch>()
  const [onPresent] = useModal(<TestModal />)

  console.log('onPresent= ', onPresent)
  const handlePresent = () => {
    console.log('helo')
    onPresent()
  }
  return (
    <Page>
      <Button onClick={handlePresent}>present</Button>
    </Page>
  )
}

export default IndexPage

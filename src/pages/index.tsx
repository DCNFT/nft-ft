import { useNaviState } from 'store/navi/hooks'
import { AppDispatch } from 'store'
import { setPath } from 'store/navi/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, useModal } from 'components/Common/Modal'
import Button from 'components/Common/Button/Button'
import Page from 'components/Layout/Page'
import Home from 'views/Home'
declare global {
  interface Window {
    web3: any
  }
}

const IndexPage = ({ theme }) => {
  return <Home />
}

export default IndexPage

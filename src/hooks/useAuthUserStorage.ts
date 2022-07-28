import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isEqual, isEmpty } from 'lodash'
import { decryptWithAES, encryptWithAES } from 'utils/crypto'
import { useAuthState } from 'store/auth/hooks'
import { authActions } from 'store/auth'

const useBlaBla = () => {
  const dispatch = useDispatch()
  const authState = useAuthState()

  // a. 최초 진입 시
  useEffect(() => {
    const strData =
      localStorage.getItem('NFT-FRIENDS-USER-INFO') ||
      sessionStorage.getItem('NFT-FRIENDS-USER-INFO')
    if (!isEmpty(strData)) {
      dispatch(authActions.setAuth(JSON.parse(decryptWithAES(strData))))
    }
  }, [])

  // b. state 변경 시, localStorage/sessionStorage 갱신
  useEffect(() => {
    // 아직 초기화 되지 않은 데이터는 저장하지 않는다.
    if (!authState.authenticated) return

    const currLocalValue = localStorage.getItem('NFT-FRIENDS-USER-INFO')
    const currSessionValue = sessionStorage.getItem('NFT-FRIENDS-USER-INFO')
    const currDecryptLocalValue = decryptWithAES(currLocalValue)
    const currDecryptSessionValue = decryptWithAES(currSessionValue)

    // 전부 다 같으면 pass
    if (
      currLocalValue === currSessionValue &&
      isEqual(JSON.parse(currDecryptLocalValue), authState)
    ) {
      return
    }

    // 다르면!
    if (isEqual(JSON.parse(currDecryptLocalValue), authState)) {
      // localStorage 만 state와 같으면 sessionStorage 같은 값 설정
      sessionStorage.setItem('NFT-FRIENDS-USER-INFO', currLocalValue)
    } else if (isEqual(JSON.parse(currDecryptSessionValue), authState)) {
      // sessionStorage 만 state와 같으면 localStorage 같은 값 설정
      localStorage.setItem('NFT-FRIENDS-USER-INFO', currSessionValue)
    } else {
      // localStorage/sessionStorage 이 state와 다르면, 신규 값 설정
      const encDataString = encryptWithAES(JSON.stringify(authState))
      sessionStorage.setItem('NFT-FRIENDS-USER-INFO', encDataString)
      localStorage.setItem('NFT-FRIENDS-USER-INFO', encDataString)
    }
  }, [authState])

  useEffect(() => {
    // LocalStorage 변경 이벤트! (sessionStorage는 감지되지 않는다!)
    const setStorage = ({ key, oldValue, newValue }) => {
      // 내 storage만 확인
      if (key !== 'NFT-FRIENDS-USER-INFO') return

      // newValue가 null 이면 다른 페이지가 닫힘, 로그인 유지
      if (isEmpty(newValue)) {
        localStorage.setItem('NFT-FRIENDS-USER-INFO', oldValue)
        return
      }

      const decOldValue = decryptWithAES(oldValue)
      const decNewValue = decryptWithAES(newValue)
      if (
        decOldValue === decNewValue ||
        (!isEmpty(decOldValue) && isEqual(JSON.parse(decOldValue), JSON.parse(decNewValue)))
      ) {
        return
      }

      sessionStorage.setItem('NFT-FRIENDS-USER-INFO', newValue)
      dispatch(authActions.setAuth(JSON.parse(decNewValue)))
    }

    // LocalStorage 만 반응함
    window.addEventListener('storage', setStorage, false)
    return () => {
      window.removeEventListener('storage', setStorage, false)
    }
  }, [])

  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem('NFT-FRIENDS-USER-INFO')
    }
    window.addEventListener('beforeunload', handleLogout)
  }, [])
}

export default useBlaBla

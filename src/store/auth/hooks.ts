import { useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'

export function useAuthState(): AppState['auth'] {
  return useSelector<AppState, AppState['auth']>((state) => state.auth)
}

export function useIsLogin(): boolean {
  const { authenticated } = useSelector<AppState, AppState['auth']>((state) => state.auth)
  return authenticated
}

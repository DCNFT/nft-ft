import { light, dark } from 'theme'
import ModalProvider from 'components/Common/Modal/ModalContext'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ToastsProvider } from 'contexts/ToastsContext'
import { Store } from '@reduxjs/toolkit'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

const StyledThemeProvider = (props) => {
  const { resolvedTheme } = useNextTheme()
  return <ThemeProvider theme={resolvedTheme === 'dark' ? dark : light} {...props} />
}

const Providers: React.FC<{ children: any; store: Store; session: any }> = ({ children, store, session }) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ToastsProvider>
          <NextThemeProvider>
            <StyledThemeProvider>
              <ModalProvider>{children}</ModalProvider>
            </StyledThemeProvider>
          </NextThemeProvider>
        </ToastsProvider>
      </Provider>
    </SessionProvider>
  )
}

export default Providers

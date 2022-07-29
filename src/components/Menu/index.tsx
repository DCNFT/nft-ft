import { useState } from 'react'
import styled from 'styled-components'
import Flex from '../Common/Box/Flex'
import { Box } from '../Common/Box'
import { Button } from 'components/Common/Button'
import MenuItem from 'components/Menu/MenuItem'
import DropdownMenu from './DropdownMenu'
import MenuItemsMock from './mock'
import MenuConfig from './config'
import { useRouter } from 'next/router'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { useIsLogin } from 'store/auth/hooks'

const MENU_HEIGHT = 50
const St = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    z-index: 99999;
  `,
  StyledNav: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${MENU_HEIGHT}px;
    background-color: ${({ theme }) => theme?.nav?.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
    transform: translate3d(0, 0, 0);

    padding-left: 16px;
    padding-right: 16px;
  `,
  NavigationInner: styled.div`
    display: flex;
    height: 100%;
  `,
  NavigationContainerLinkWrapper: styled.ul`
    flex-flow: row nowrap;
    display: flex;
    align-items: center;
  `,
  FixedContainer: styled.div<{ showMenu: boolean; height: number }>`
    position: fixed;
    top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
    left: 0;
    transition: top 0.2s;
    height: ${({ height }) => `${height}px`};
    width: 100%;
    z-index
  `,
}

const MenuWrapper = () => {
  const { pathname } = useRouter()
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(true)
  const activeMenuItem = getActiveMenuItem({ menuConfig: MenuConfig, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })
  const isLogin = useIsLogin()
  const handleLogin = () => {
    router.push('login')
  }
  return (
    <St.Wrapper>
      <St.FixedContainer showMenu={showMenu} height={MENU_HEIGHT}>
        <St.StyledNav>
          <Flex>
            <div>
              <div>NFT FRIENDS</div>
            </div>
            {MenuConfig &&
              MenuConfig.map((menuItem) => {
                return (
                  <DropdownMenu items={menuItem.items}>
                    <MenuItem isActive={false} href={menuItem.href}>
                      {menuItem.label}
                    </MenuItem>
                  </DropdownMenu>
                )
              })}
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {isLogin ? (
              <>
                <Box width="40px" height="40px" borderRadius="50%">
                  <img src="" alt="" style={{ width: '100%', height: '100%' }} />
                </Box>

                <Button onClick={handleLogin}>로그인</Button>
              </>
            ) : (
              <Button onClick={handleLogin}>로그인</Button>
            )}
          </Flex>
        </St.StyledNav>
      </St.FixedContainer>
    </St.Wrapper>
  )
}

export default MenuWrapper

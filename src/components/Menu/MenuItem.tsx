import styled from 'styled-components'

type StyledMenuItemProps = {
  isActive: boolean
}
const St = {
  StyledMenuItem: styled.div<StyledMenuItemProps>`
    margin: 0 10px;
    align-items: center;
    cursor: pointer;
    font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
    &:hover {
      background: ${({ theme }) => theme.colors.tertiary};
    }
  `,
}
type MenuItemProps = {
  isActive: boolean
  children: React.ReactNode
}
const MenuItem = ({ isActive, children }: MenuItemProps) => {
  return <St.StyledMenuItem isActive={isActive}>{children}</St.StyledMenuItem>
}

export default MenuItem

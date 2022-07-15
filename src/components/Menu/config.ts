import { DropdownMenuItems, DropdownMenuItemType } from './types'
import { ElementType } from 'react'

export type MenuItemsType = {
  label: string
  href: string
  icon?: ElementType<any>
  fillIcon?: ElementType<any>
  items?: DropdownMenuItems[]
  showOnMobile?: boolean
  showItemsOnMobile?: boolean
}

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config = [
  {
    label: '검색',
    href: '/search',
    // icon: 'SwapIcon',
    // fillIcon: 'SwapFillIcon',

    showItemsOnMobile: false,
    items: [
      {
        label: 'Grade',
        href: '/grade',
      },
    ],
  },
  {
    label: '마이페이지',
    href: '/mypage',
    // icon: 'MoreIcon',
    items: [
      {
        label: '고객센터',
        href: '/info',
      },
      {
        label: 'IFO',
        href: '/ifo',
      },
      {
        label: 'Voting',
        href: '/voting',
      },
    ],
  },
]

export default config

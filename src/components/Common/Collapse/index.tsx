import { useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import iconMap from './iconMap'
import { Text } from 'components/Common/Text'
type StyledIconProps = {
  isSubMenuOpen: boolean
}
const St = {
  ContentsWrapper: styled.div`
    height: 0;
    width: inherit;
    padding: 0 8px;
    overflow: hidden;
    transition: height 0.35s ease, background 0.35s ease;
  `,
  Icon: styled.i<StyledIconProps>`
    cursor: pointer;
    transition: all 0.35s ease;
    transform: ${({ isSubMenuOpen }) =>
      isSubMenuOpen ? 'rotate(-180deg) !important' : 'rotate(0deg) !important'};
  `,
  Title: styled.div`
    font-weight: bold;
    font-size: 1.8rem;
  `,
}
const Collapse = ({ title, children }: any) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true)
  const parentRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)
  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation()
      if (parentRef.current === null || childRef.current === null) {
        return
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0'
        // parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`
        // parentRef.current.style.background = "lightgray";
      }
      setIsSubMenuOpen(!isSubMenuOpen)
    },
    [isSubMenuOpen],
  )

  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text bold fontSize="18px">
          {title}
        </Text>
        <St.Icon onClick={handleButtonClick} isSubMenuOpen={isSubMenuOpen}>
          {iconMap.UpOutlined}
        </St.Icon>
      </div>

      <St.ContentsWrapper ref={parentRef}>
        <div ref={childRef}>{children}</div>
      </St.ContentsWrapper>
    </div>
  )
}

export default Collapse

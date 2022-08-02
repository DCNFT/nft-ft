import { useState, useCallback, useEffect } from 'react'
import NFTCard from './components/NFTCard'
import Text from 'components/Common/Text/Text'
import { Box, Grid, Flex } from 'components/Common/Box'
import Page from 'components/Layout/Page'
import { Tab, TabMenu } from 'components/Common/TabMenu'
import IconMap from 'components/Common/Collapse/iconMap'
import NFTCardList from './components/NFTCardList.json'
import { NFTCardTypes } from './components/types'

const WalletNFTViewer = ({ number, walletAddress, NFTCardList }) => {
  const [collapse, setCollapse] = useState(false)

  const handleClick = useCallback(() => {
    setCollapse((prev) => !prev)
  }, [collapse])

  return (
    <Box>
      <Box p={10} background="grey">
        <Flex justifyContent="space-between">
          <Text>{`지갑${number} (${walletAddress})`}</Text>
          <Flex
            justifyContent="center"
            alignItems="center"
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
          >
            <span>{IconMap['DownOutlined']}</span>
          </Flex>
        </Flex>
      </Box>
      <Grid gridGap="16px" gridTemplateColumns={['1fr', '1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}>
        {!collapse && (
          <>
            {NFTCardList.length === 0 && <Box p={50}>! 표시할 NFT가 없습니다.</Box>}
            {NFTCardList?.map((item) => {
              return <NFTCard imageUrl={item.imageUrl} tokenId={item.tokenId} />
            })}
          </>
        )}
      </Grid>
    </Box>
  )
}

const MyPage = () => {
  const [tab, setTab] = useState(0)
  const [seletedAll, setSelectedAll] = useState(false)
  const [selectedCards, setSelectedCards] = useState([])
  const [interestSettingMode, setInterestSettingMode] = useState(false)

  const handleItemClick = (index: number) => setTab(index)

  const handleSelected = useCallback(
    (card: NFTCardTypes, isSelected: any) => {
      if (!interestSettingMode) return
      if (isSelected) {
        setSelectedCards(
          selectedCards.filter((selectedCard) => selectedCard.tokenId !== card.tokenId),
        )
      }
      if (!isSelected) {
        const array = [...selectedCards, card]
        setSelectedCards(array)
      }
    },
    [selectedCards, interestSettingMode],
  )

  const handleSelectedAll = useCallback(() => {
    setSelectedAll((prev) => !prev)
    if (seletedAll) setSelectedCards(NFTCardList)
    else setSelectedCards([])
  }, [seletedAll])

  const handleInterestSettingMode = useCallback(() => {
    setInterestSettingMode((prev) => !prev)
  }, [interestSettingMode])

  /* 관심 세팅 모드 종료시 선택카드 초기화 */
  useEffect(() => {
    if (!interestSettingMode) setSelectedCards([])
  }, [interestSettingMode])

  return (
    <Page>
      <TabMenu activeIndex={tab} onItemClick={handleItemClick}>
        <Tab>관심 NFT</Tab>
        <Tab>나의 NFT</Tab>
        <Tab>예약 검사</Tab>
      </TabMenu>
      <Flex justifyContent="space-between">
        <Text>삭제할 NFT를 선택 후 삭제 버튼을 눌러주세요.</Text>
        <div>
          {tab === 0 && !interestSettingMode && (
            <Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                mr={10}
                style={{ cursor: 'pointer' }}
              >
                <span style={{ marginRight: '5px' }}>{IconMap.FilterOutlined}</span>
                <Text>최신 등록순</Text>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                onClick={handleInterestSettingMode}
                mr={10}
                style={{ cursor: 'pointer' }}
              >
                <span style={{ marginRight: '5px' }}>{IconMap.SettingOutlined}</span>
                <Text>관심 NFT 설정</Text>
              </Flex>
            </Flex>
          )}
          {tab === 0 && interestSettingMode && (
            <Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                onClick={handleSelectedAll}
                mr={10}
                style={{ cursor: 'pointer' }}
              >
                <span style={{ marginRight: '5px' }}>{IconMap.CheckCircleOutlined}</span>
                <Text>전체 선택</Text>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                mr={10}
                style={{ cursor: 'pointer' }}
              >
                <span style={{ marginRight: '5px' }}>{IconMap.DeleteOutlined}</span>
                <Text>삭제</Text>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                onClick={handleInterestSettingMode}
                style={{ cursor: 'pointer' }}
              >
                <span style={{ marginRight: '5px' }}>{IconMap.DeleteOutlined}</span>
                <Text>종료</Text>
              </Flex>
            </Flex>
          )}
          {tab === 1 && (
            <Flex justifyContent="center" alignItems="center" style={{ cursor: 'pointer' }}>
              <span style={{ marginRight: '5px' }}>{IconMap.WalletOutlined}</span>
              <Text>지갑 설정</Text>
            </Flex>
          )}
        </div>
      </Flex>
      {tab === 0 && (
        <Box>
          <Grid
            gridGap="16px"
            gridTemplateColumns={['1fr', '1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
          >
            <>
              {NFTCardList.map((item: any) => {
                const isSelected = selectedCards.find(
                  (selectedCard) => selectedCard.tokenId === item.tokenId,
                ) as boolean

                return (
                  <NFTCard
                    handleOnClick={() => {
                      handleSelected(item, isSelected)
                    }}
                    imageUrl={item.imageUrl}
                    tokenId={item.tokenId}
                    isSelected={isSelected}
                  />
                )
              })}
            </>
          </Grid>
        </Box>
      )}
      {tab === 1 && (
        <Box>
          <WalletNFTViewer number="1" walletAddress="0x0000000000000" NFTCardList={NFTCardList} />
          <WalletNFTViewer number="2" walletAddress="0x0000000000000" NFTCardList={[]} />
          <WalletNFTViewer number="3" walletAddress="0x0000000000000" NFTCardList={[]} />
        </Box>
      )}
    </Page>
  )
}
export default MyPage

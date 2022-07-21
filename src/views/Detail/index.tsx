import Image from 'next/image'
import { Text } from 'components/Common/Text'
import { Box, Flex } from 'components/Common/Box'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import Collapse from 'components/Common/Collapse'
import { useQuery } from 'react-query'

import useToast from 'hooks/useToast'

const St = {
  ImageWrapper: styled.div`
    flex: 1;
    height: 500px;
    width: 500px;
    border-radius: 8px;
    background: #efefef;
  `,
  PropertyContainer: styled.div`
    flex: 1;
    margin: 5px;
    width: 100px;
    height: 50px;
    background: rgba(21, 178, 229, 0.06);
    text-align: center;
    padding: 10px;
    borderradius: 4px;
  `,
  MainButton: styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #e48927;
  `,
}

// type DetailProps = {
//   title: string
// }
const ScanResult = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" width="50%">
      <Flex alignItems="center" padding="10px">
        <Box padding="5px">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 19H13C14.1046 19 15 18.1046 15 17V7.41421C15 7.149 14.8946 6.89464 14.7071 6.70711L9.29289 1.29289C9.10536 1.10536 8.851 1 8.58579 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </Box>
        <div style={{ padding: '10px' }}>
          <div className="text-tiny">Contract has been audited</div>
          <div className="">contract</div>
        </div>
      </Flex>
      <Box padding={'5px'}>
        <div className="">-</div>
      </Box>
    </Flex>
  )
}
const Property = () => {
  return (
    <St.PropertyContainer>
      <div>
        <Text color="rgb(32, 129, 226)" fontSize="14px">
          Title
        </Text>
      </div>
      <div>None</div>
    </St.PropertyContainer>
  )
}
export const fetchComments = async (postId) => {
  const response = await (
    await fetch(
      `https://api.etherscan.io/api
      ?module=account
      &action=tokennfttx
      &contractaddress=0x223E16c52436CAb2cA9FE37087C79986a288FFFA
      &address=0x6975be450864c02b4613023c2152ee0743572325
      &page=1
      &offset=100
      &startblock=0
      &endblock=27025780
      &sort=asc
      &apikey=1FPXJVPY7TF6CNQ7UUAC65WXA2GYID9D27`,
    )
  ).json()
  return response
}
const Detail = () => {
  const { toastSuccess } = useToast()

  const handleToast = () => {
    toastSuccess('hello', <div>hello</div>)
  }
  const handleToast2 = () => {
    toastSuccess('hello2', <div>hello2</div>)
  }
  return (
    <Page>
      <Flex>
        <St.ImageWrapper>
          <img
            src="/images/home/nft/mountain.jpg"
            alt="mountain"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </St.ImageWrapper>
        <Flex flexDirection="column" flex={1} padding={'0 20px'}>
          <Text fontSize="42px" bold>
            NFT TITLE
          </Text>
          <Text fontSize="30px" bold>
            NFT TOKEN ID
          </Text>
          <Text>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem.
          </Text>
          <div style={{ display: 'flex' }}>
            <div>
              <Box width="24px" height="24px" borderRadius="50%"></Box>
            </div>
            <div>
              <div>
                <Text>owner</Text>
              </div>
              <div>
                <Text>0x000000000000</Text>
              </div>
            </div>
          </div>
          <St.MainButton onClick={handleToast}>
            <Text>버튼</Text>
          </St.MainButton>
          <St.MainButton onClick={handleToast2}>
            <Text>버튼2</Text>
          </St.MainButton>
        </Flex>
      </Flex>
      <Box mt="20px">
        <Flex flexDirection="column" width="50%">
          <Collapse title="property">
            <div style={{ display: 'flex', width: '50%', flexWrap: 'wrap' }}>
              <Property />
              <Property />
              <Property />
            </div>
          </Collapse>

          <Collapse title="description">
            <div style={{ display: 'flex', width: '50%', flexWrap: 'wrap' }}>
              Azuki starts with a collection of 10,000 avatars that give you membership access to
              The Garden: a corner of the internet where artists, builders, and web3 enthusiasts
              meet to create a decentralized future. Azuki holders receive access to exclusive
              drops, experiences, and more. Visit
            </div>
          </Collapse>
          <Collapse title="property">
            <div style={{ display: 'flex', width: '50%', flexWrap: 'wrap' }}>
              Azuki starts with a collection of 10,000 avatars that give you membership access to
              The Garden: a corner of the internet where artists, builders, and web3 enthusiasts
              meet to create a decentralized future. Azuki holders receive access to exclusive
              drops, experiences, and more. Visit
            </div>
          </Collapse>
        </Flex>
        <Box mt="20px">
          <Text bold fontSize="20px">
            검사 목록
          </Text>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ScanResult />
            <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult />
            <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult />
            <ScanResult /> <ScanResult /> <ScanResult />
            <ScanResult />
            <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult />
            <ScanResult /> <ScanResult />
          </div>
        </Box>
      </Box>
    </Page>
  )
}
export default Detail

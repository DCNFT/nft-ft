import Image from 'next/image'
import { Text } from 'components/Common/Text'
import { Box } from 'components/Common/Box'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import Collapse from 'components/Common/Collapse'
const St = {
  ImageWrapper: styled.div`
    flex: 1;
    height: 500px;
    width: 500px;
    border-radius: 8px;
    background: #efefef;
  `,
}

// type DetailProps = {
//   title: string
// }
const ScanResult = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
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
      </div>
      <Box padding={'5px'}>
        <div className="">-</div>
      </Box>
    </div>
  )
}
const Property = () => {
  return (
    <div
      style={{
        flex: 1,
        margin: '5px',
        width: '100px',
        height: '50px',
        background: 'rgba(21, 178, 229, 0.06)',
        textAlign: 'center',
        padding: '10px',
        borderRadius: '4px',
      }}
    >
      <div>
        <Text color="rgb(32, 129, 226)" fontSize="14px">
          Title
        </Text>
      </div>
      <div>None</div>
    </div>
  )
}
const Detail = () => {
  return (
    <Page>
      <div style={{ display: 'flex' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '0 20px' }}>
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
            <div></div>
            <div>
              <div>
                <Text>owner</Text>
              </div>
              <div>
                <Text>0x000000000000</Text>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'centers',
            }}
          >
            <div>버튼</div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
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
        </div>
        <div>
          <Text>검사 목록 </Text>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ScanResult />
            <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult />
            <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult />
            <ScanResult /> <ScanResult /> <ScanResult />
            <ScanResult />
            <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult /> <ScanResult />
            <ScanResult /> <ScanResult />
          </div>
        </div>
      </div>
    </Page>
  )
}
export default Detail

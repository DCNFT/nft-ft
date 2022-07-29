import styled, { keyframes } from 'styled-components'
import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import Misson from './components/Misson'
import Heading from 'components/Common/Heading/Heading'
import { Box } from 'components/Common/Box'
import { Text } from 'components/Common/Text'
import Page from 'components/Layout/Page'
import LayoutContainer from './Layout/LayoutContainer'
import ImageWrapper from './Layout/ImageWrapper'
import NFTMonitoring from '../../../public/images/home/nft/Monitoring_2_1.png'
import Vibes from '../../../public/images/home/nft/Vibes@2x.png'
import React, { useEffect } from 'react'
import Cards from './components/Cards'
import AOS from 'aos'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'

import { MasonryGrid, JustifiedGrid, FrameGrid, PackingGrid } from '@egjs/react-grid'
import { useModal } from '../../components/Common'
import { LoginModal } from './components/LoginModal'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-url: url('/images/home/nft/Vibes@2x.png');
  html,
  body {
    position: relative;
    height: 100%;
    padding: 0 !important;
    margin: 0 !important;
  }

  .container {
    overflow: hidden;
  }

  .item {
    position: absolute;
    width: 100px;
    color: white;
    text-align: center;
  }

  .item:nth-child(6n + 1) {
    background: #f55;
    height: 200px;
  }

  .item:nth-child(6n + 2) {
    background: #7e7;
    height: 300px;
  }

  .item:nth-child(6n + 3) {
    background: #66e;
    height: 200px;
  }

  .item:nth-child(6n + 4) {
    background: #4af;
    height: 100px;
  }

  .item:nth-child(6n + 5) {
    background: #ed5;
    height: 150px;
  }

  .item:nth-child(6n + 6) {
    background: #d5e;
    height: 130px;
  }

  .result {
    text-align: center;
    padding: 10px;
    font-weight: bold;
    box-sizing: border-box;
    font-size: 14px;
  }

  .button {
    position: relative;
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    background: white;
    border: 1px solid #ccc;
    appearance: none;
    font-weight: bold;
    width: 150px;
    text-align: center;
    box-sizing: border-box;
    font-size: 14px;
  }

  .image {
    position: relative;
    width: 100%;
    font-size: 0;
  }

  .image img {
    width: 100%;
  }

  .title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
  }

  @media (prefers-color-scheme: dark) {
    .title,
    .result {
      color: white;
    }
  }

  @media (prefers-color-scheme: light) {
    .title,
    .result {
      color: black;
    }
  }
`
const HeadingContainer = styled.div`
  position: absolute;
  margin-top: 280px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`

//aos
//offest
//easing
//duration
//anchor
//placement

const MainButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 70px;
  width: 400px;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(316deg, #334ccb, #fc466b);
  color: white;
  border-radius: 40px;
  line-height: 1;
  font-weight: 600;
  background: ;
`

const leftAosArray = ['fade-zoom-in', '200', 'ease-in-sine', '600']
const rightAosArray = ['fade-zoom-in', '200', 'ease-in-sine', '600']
const Home: React.FC = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const { theme } = useTheme()
  const { accessToken } = useSelector<AppState, AppState['auth']>((state) => state.auth)
  console.log('accessToken = ', accessToken)
  const HomeSectionContainerStyles = {
    margin: '0',
    width: '100%',
    height: '100%',
    maxWidth: '968px',
  }
  const right = <ImageWrapper src={NFTMonitoring} alt="nft" />
  const left = (
    <>
      <Heading scale="md" mb="24px" mt="10px" textAlign="center">
        Our Misson
      </Heading>
      <Text>Donec imperdiet lorem nulla </Text>
    </>
  )

  const [onPresentLogin] = useModal(<LoginModal />)

  return (
    <>
      <BackgroundWrapper>
        <img
          src="/images/home/nft/Vibes@2x.png"
          alt="Vibes"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: '-1',
            objectFit: 'contain',
          }}
        />
        <HeadingContainer>
          <Heading
            scale="xxl"
            color="secondary"
            mb="24px"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            {'Going to be Verified Revolution'}
          </Heading>
          <Heading
            scale="lg"
            color="secondary"
            mb="0px"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            {'Going to be Verified Revolution'}
          </Heading>
          <Heading
            scale="lg"
            color="secondary"
            mb="24px"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            {'Going to be '}
          </Heading>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <MainButton onClick={onPresentLogin}> JOIN US</MainButton>
          </div>
        </HeadingContainer>
      </BackgroundWrapper>

      <Page>
        <PageSection
          innerProps={{ style: HomeSectionContainerStyles }}
          background={
            theme.isDark
              ? theme.colors.background
              : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
          }
          index={2}
        >
          <Hero />
        </PageSection>

        <PageSection
          innerProps={{ style: HomeSectionContainerStyles }}
          background={
            theme.isDark
              ? theme.colors.background
              : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
          }
          index={2}
        >
          <Box mb="50px" style={{ textAlign: 'center' }}>
            <Heading
              scale="xxl"
              color="secondary"
              mb="24px"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              {'Going to be Verified Revolution'}
            </Heading>
          </Box>

          <LayoutContainer
            leftChildren={left}
            rightChildren={right}
            leftAosArray={leftAosArray}
            rightAosArray={rightAosArray}
          />
          <Box marginBottom={'10px'} />
          <LayoutContainer
            leftChildren={right}
            rightChildren={left}
            leftAosArray={leftAosArray}
            rightAosArray={rightAosArray}
          />

          <Box marginBottom={'10px'} />
          <LayoutContainer
            leftChildren={left}
            rightChildren={right}
            leftAosArray={leftAosArray}
            rightAosArray={rightAosArray}
          />

          <Box marginBottom={'10px'} />
        </PageSection>
        <Cards />
      </Page>
    </>
  )
}

export default Home

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
import { useEffect } from 'react'
import Cards from './components/Cards'
import AOS from 'aos'
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

  const HomeSectionContainerStyles = { margin: '0', width: '100%', height: '100%', maxWidth: '968px' }
  const right = <ImageWrapper src={NFTMonitoring} alt="nft" />
  const left = (
    <>
      <Heading scale="md" mb="24px" mt="10px" textAlign="center">
        Our Misson
      </Heading>
      <Text>Donec imperdiet lorem nulla </Text>
    </>
  )

  return (
    <>
      <BackgroundWrapper>
        <img
          src="/images/home/nft/Vibes@2x.png"
          alt="Vibes"
          style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-1', objectFit: 'contain' }}
        />
        <HeadingContainer>
          <Heading scale="xxl" color="secondary" mb="24px" data-aos="fade-up" data-aos-anchor-placement="top-center">
            {'Going to be Verified Revolution'}
          </Heading>
          <Heading scale="lg" color="secondary" mb="0px" data-aos="fade-up" data-aos-anchor-placement="top-center">
            {'Going to be Verified Revolution'}
          </Heading>
          <Heading scale="lg" color="secondary" mb="24px" data-aos="fade-up" data-aos-anchor-placement="top-center">
            {'Going to be '}
          </Heading>
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <MainButton> JOIN US</MainButton>
          </div>
        </HeadingContainer>
      </BackgroundWrapper>

      <Page>
        <PageSection
          innerProps={{ style: HomeSectionContainerStyles }}
          background={theme.isDark ? theme.colors.background : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'}
          index={2}
        >
          <Hero />
        </PageSection>

        <PageSection
          innerProps={{ style: HomeSectionContainerStyles }}
          background={theme.isDark ? theme.colors.background : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'}
          index={2}
        >
          <Box mb="50px" style={{ textAlign: 'center' }}>
            <Heading scale="xxl" color="secondary" mb="24px" data-aos="fade-up" data-aos-anchor-placement="top-center">
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

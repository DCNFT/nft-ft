import styled from 'styled-components'
import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import Misson from './components/Misson'
import Heading from 'components/Common/Heading/Heading'
import Page from 'components/Layout/Page'
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
`
const HeadingContainer = styled.div`
  postion: absolute;
  margin-top: 170px;

  align-items: center;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
`
const Home: React.FC = () => {
  const { theme } = useTheme()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', height: '100vh', maxWidth: '968px' }

  return (
    <>
      <BackgroundWrapper>
        <HeadingContainer>
          <Heading scale="xxl" color="secondary" mb="24px" data-aos="fade-up" data-aos-anchor-placement="top-center">
            {'Going to be Verified Revolution'}
          </Heading>
          <Heading scale="lg" color="secondary" mb="24px" data-aos="fade-up" data-aos-anchor-placement="top-center">
            {'Going to be Verified Revolution'}
          </Heading>
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
          innerProps={{}}
          background={
            theme.isDark
              ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
              : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
          }
          index={2}
        >
          <Misson />
        </PageSection>
      </Page>
    </>
  )
}

export default Home

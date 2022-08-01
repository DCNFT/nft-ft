import CardBody from 'components/Common/Card/CardBody'
import CardFooter from 'components/Common/Card/CardFooter'
import Card from 'components/Common/Card/Card'
import Image from 'components/Common/Image/Image'

const NFTCard = () => {
  return (
    <Card>
      <CardBody style={{ height: '150px' }} p={0}>
        <Image width={500} height={150} alt="" src="/src.png" isUseBlur />
      </CardBody>
      <CardFooter>
        <div>토큰 아이디</div>

        <div>토큰 아이디</div>
      </CardFooter>
    </Card>
  )
}

export default NFTCard

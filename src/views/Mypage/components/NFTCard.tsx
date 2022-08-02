import CardBody from 'components/Common/Card/CardBody'
import CardFooter from 'components/Common/Card/CardFooter'
import Card from 'components/Common/Card/Card'
import Image from 'components/Common/Image/StyledImage'

type NFTCardProps = {
  imageUrl: string
  tokenId: string
  isSelected: boolean
  handleOnClick: () => void
}

const NFTCard = ({ imageUrl, tokenId, isSelected, handleOnClick }: NFTCardProps) => {
  return (
    <Card isActive={isSelected} onClick={handleOnClick}>
      <CardBody style={{ height: '250px' }} p={0}>
        <Image isFill alt="" src={imageUrl} />
      </CardBody>
      <CardFooter>
        <div>{tokenId}</div>
      </CardFooter>
    </Card>
  )
}

export default NFTCard

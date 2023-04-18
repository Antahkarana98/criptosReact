import styled from '@emotion/styled'

const ResultContainer = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Image = styled.img`
    display: block;
    width: 120px;
`

const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`

const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`

const Result = ({quote}) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = quote

  return (
    <ResultContainer>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="image cripto"/>

      <div>
        <Price>Price: <span>{PRICE}</span></Price>
        <Text>High price of day: <span>{HIGHDAY}</span></Text>
        <Text>Low price of day: <span>{LOWDAY}</span></Text>
        <Text>Change last 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
        <Text>Last update: <span>{LASTUPDATE}</span></Text>
      </div>
    </ResultContainer>
  )
}

export default Result

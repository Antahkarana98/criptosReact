import styled from '@emotion/styled'

const ResultContainer = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;

  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #333e4f;
  padding: 20px;
  border-radius: 25px;
  height: 100%;
  .info {
    display: flex;
    justify-content: space-between;
    background: #29323f;
    border-radius: 25px;
  }
  .info div {
    width: 50%;
    padding: 0 20px;
    margin: 20px 0;
  }

  .border {
    border-right: 1px solid #fff;
  }

  .header-card {
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
  }

`

const Image = styled.img`
    display: block;
    width: 120px;
    /* position: absolute; */
`

const Text = styled.p`
  font-size: 18px;
  color: #d2d2d2;
  padding-bottom: 5px;
  span {
    font-weight: 700;
    color: #fff;
  }
`

const TextTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 5px;

`

const Price = styled.p`
  font-size: 24px;
  margin-left: 20px;
  span {
    font-weight: 700;
  }
`

const Result = ({quote}) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = quote

  return (
    <ResultContainer>
      <div className='header-card'>
        <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="image cripto"/>
        <Price>Price Now: <br /> <span>{PRICE}</span></Price>
      </div>
      <div className='info'>
        <div className='border'>
          <TextTitle>Price of day</TextTitle>
          <Text>High price of day:</Text>
          <Text><span>{HIGHDAY}</span></Text>
          <Text>Low price of day:</Text>
          <Text><span>{LOWDAY}</span></Text>
        </div>
        <div>
          <TextTitle>Updates of day</TextTitle>
          <Text>Change last 24 hours:</Text>
          <Text><span>{CHANGEPCT24HOUR}</span></Text>
          <Text>Last update:</Text>
          <Text><span>{LASTUPDATE}</span></Text>
        </div>
      </div>
    </ResultContainer>
  )
}

export default Result

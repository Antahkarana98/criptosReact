import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'

import Bitcoin from './assets/Bitcoin.png'
import Ethereum from './assets/Ethereum.png'
import Tether from './assets/tether.png'
import Xrp from './assets/xrp.png'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  width: 95%;
  margin: 0 auto 30px auto;
  span {
    color: #66a2fe;
    font-size: 50px;
  }
`

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 25px;
  margin-top: 50px;
  img{
    width: 200px;
    height: 200px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 2fr);
    img{
      width: 150px;
      height: 150px;
    }
  }
`

function App() {

  const [coins, setCoins] = useState({})
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      const apiQuote = async () => {
        setLoading(true)
        setQuote({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD`
        const response = await fetch(url)
        const result = await response.json()
        setQuote(result.DISPLAY.BTC.USD)
        setLoading(false)
      }
      apiQuote()
  }, [])

  useEffect(() => {
    if(Object.keys(coins).length > 0){
      const apiQuote = async () => {
        setLoading(true)
        setQuote({})
        const { coin, cripto } = coins
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${coin}`
        const response = await fetch(url)
        const result = await response.json()
        setQuote(result.DISPLAY[cripto][coin])
        setLoading(false)
      }
      apiQuote()
    }
  }, [coins])

  return (
    <div className='bg-screen'>

    <Heading>How Much My <span>Crypto's</span> Are Worth?</Heading>

    <Container>
      <div>
        <Form
          setCoins={setCoins}
        />
      </div>
      <div>
        {loading && <Spinner />}
        {quote.PRICE && <Result quote={quote}/>}
      </div>
    </Container>

    <Images>
      <img src={Bitcoin} alt="Bitcoin-logo"/>
      <img src={Ethereum} alt="Ethereum-logo"/>
      <img src={Tether} alt="Tether-logo"/>
      <img src={Xrp} alt="Xrp-logo"/>
    </Images>
    </div>
  )
}

export default App

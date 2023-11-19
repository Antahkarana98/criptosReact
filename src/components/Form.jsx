import { useState, useEffect } from "react";
import styled from '@emotion/styled'
import useSelectCoins from '../hooks/useSelectCoins'
import { coins } from '../data/coins'
import Error from './Error'

const InputSubmit = styled.input`
  background-color: #66a2fe;
  border: none;
  width: 100%;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  color: #fff;
  transition: background-color .3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #347fef;
    cursor: pointer;
  }
`

const Form = ({setCoins}) => {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const [ coin, SelectCoins ] = useSelectCoins('Select your coin', coins)
  const [ cripto, SelectCripto ] = useSelectCoins('Select your cripto', criptos)

  const handleSubmit = e => {
    e.preventDefault()

    if ([coin, cripto].includes('')) {
      setError(true)
      return
    }

    setError(false)
    setCoins({coin, cripto})
  }

  useEffect(() => {
    const api = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const response = await fetch(url)
      const result = await response.json()

      const arrayCriptos = result.Data.map(cripto => {
        const object = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        }
        return object
      })

      setCriptos(arrayCriptos)
    }

    api();
  }, [])

  return (
    <>
      {error && <Error>All fields are required</Error>}
      <form
        onSubmit={handleSubmit}
        className="form"
      >

        <SelectCoins />

        <SelectCripto />

        <InputSubmit
          type="submit"
          value="Calculate"
        />

      </form>
    </>
  )
}

export default Form

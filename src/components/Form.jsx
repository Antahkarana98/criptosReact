import { useEffect } from "react";
import styled from '@emotion/styled'
import useSelectCoins from '../hooks/useSelectCoins'
import { coins } from '../data/coins'

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  color: #fff;
  transition: background-color .3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

const Form = () => {

  const [ coin, SelectCoins ] = useSelectCoins('Select your coin', coins);


  useEffect(() => {
    const api = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
      const response = await fetch(url);
      const result = await response.json();
      
      console.log(result);
    }

    api();
  }, [])

  return (
    <div>
        <form>

          <SelectCoins />

          <InputSubmit
            type="submit"
            value="Calculate"
          />

        </form>
    </div>
  )
}

export default Form

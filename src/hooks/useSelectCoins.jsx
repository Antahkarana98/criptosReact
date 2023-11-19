import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #fff;
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`

const useSelectCoins = (label, options) => {

  const [ state, setState ] = useState('')

  const selectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">- Select -</option>
        {options.map(option =>
          <option
            key={option.id}
            value={option.id}
          >{option.name}</option>
        )}
      </Select>
    </>
  )

  return [ state, selectMonedas ]
}

export default useSelectCoins

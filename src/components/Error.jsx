import styled from '@emotion/styled'


const Text = styled.div`
  color: #fff;
  background-color: #B7322C;
  padding: 15px;
  font-weight: 700;
  text-align: center;
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
`

const Error = ({children}) => {
  return (
    <Text>
      {children}
    </Text>
  )
}

export default Error

// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 44px;
  font-weight: 600;
  color: #ffffff;
`

export const ChooseDirect = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`

export const ColorAndHaxCode = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`

export const Color = styled.input`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  width: 150px;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 8px;
`
export const GradientColor = styled.div`
  display: flex;
  align-items: center;
`

export const ListItem = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px;
`
export const GeneratorButton = styled.button`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  color: #1e293b;
  background-color: #00c9b7;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 8px;
  outline: none;
  border-radius: 8px;
  border: none;
`

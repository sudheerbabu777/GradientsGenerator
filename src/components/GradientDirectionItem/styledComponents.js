// Style your elements here
import styled from 'styled-components'

export const ItemContainer = styled.li`
  list-style-type: none;
`

export const CustomButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  background-color: ${props => (props.isActive ? '#ffffff' : '#1e293b')};
  width: 100px;
  padding: 8px;
  margin: 8px;
  outline: none;
  border-radius: 8px;
  border: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`

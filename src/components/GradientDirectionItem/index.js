// Write your code here
import {ItemContainer, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {colorItem, onClickChangeColor, isActive} = props
  const {displayText, value} = colorItem

  const onClickButton = () => {
    onClickChangeColor(value)
  }

  return (
    <ItemContainer>
      <CustomButton type="button" onClick={onClickButton} isActive={isActive}>
        {displayText}
      </CustomButton>
    </ItemContainer>
  )
}

export default GradientDirectionItem

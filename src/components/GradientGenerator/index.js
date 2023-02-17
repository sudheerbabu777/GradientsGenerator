import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  ChooseDirect,
  ColorContainer,
  ColorAndHaxCode,
  Color,
  GradientColor,
  ListItem,
  GeneratorButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    activeGradientValue: gradientDirectionsList[2].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, 8ae323,014f7b`,
  }

  onClickGenerator = () => {
    const {activeGradientValue, toColorInput, fromColorInput} = this.state

    this.setState({
      gradientValue: `to ${activeGradientValue}, ${toColorInput} , ${fromColorInput}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickChangeColor = value => {
    this.setState({activeGradientValue: value})
  }

  render() {
    const {
      activeGradientValue,
      toColorInput,
      fromColorInput,
      gradientValue,
    } = this.state
    console.log(activeGradientValue)
    return (
      <AppContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <ChooseDirect>Choose Direction</ChooseDirect>
        <ListItem>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              colorItem={each}
              key={each.directionId}
              onClickChangeColor={this.onClickChangeColor}
              isActive={each.value === activeGradientValue}
            />
          ))}
        </ListItem>
        <ChooseDirect>Pick the Colors</ChooseDirect>
        <GradientColor>
          <ColorContainer>
            <ColorAndHaxCode>{toColorInput}</ColorAndHaxCode>
            <Color
              type="color"
              onChange={this.onChangeToColor}
              value={toColorInput}
            />
          </ColorContainer>
          <ColorContainer>
            <ColorAndHaxCode>{fromColorInput}</ColorAndHaxCode>
            <Color
              type="color"
              onChange={this.onChangeFromColor}
              value={fromColorInput}
            />
          </ColorContainer>
        </GradientColor>
        <GeneratorButton onClick={this.onClickGenerator}>
          Generate
        </GeneratorButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator

import { useState } from 'react'

import { Button } from 'components/Button'
import { string } from 'prop-types'
import styled from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'

import { Popper } from '../index.js'

export default {
  title: 'components/Popper',
  component: Popper
}

const Content = styled.div`
  background-color: ${({ theme }) => theme.pallete.greyCash[100]};
  width: 200px;
  padding: ${({ theme }) => theme.padding.md};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.pallete.darkBlueCash[200]};
  border: 1px solid ${getColorFromName};
`

const Template = ({ arrowBorderColor, ...args }) => {
  const [show, setShow] = useState(true)
  const toggleVisibility = () => {
    setShow(!show)
  }

  return (
    <Popper {...args} show={show} arrowBorderColor={arrowBorderColor}>
      {ref => (
        <Button expanded={false} onClick={() => toggleVisibility()} ref={ref}>
          Button
        </Button>
      )}
      <Content styleColor={arrowBorderColor}>
        Enim proident fugiat eiusmod in exercitation Lorem ipsum sint sint ipsum labore. Laborum
        cupidatat ea dolor exercitation et occaecat irure elit aute. Quis sint ex dolor magna aute
        reprehenderit esse culpa culpa non duis. Id laborum in quis culpa eu. Duis commodo enim
        aliqua pariatur in culpa magna ad fugiat cillum tempor aliqua ut cillum.
      </Content>
    </Popper>
  )
}

Template.propTypes = {
  arrowBorderColor: string
}
Template.defaultProps = {
  arrowBorderColor: ''
}
export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'dark' }
}
export const DefaultWithArrow = Template.bind({})
DefaultWithArrow.args = {
  showArrow: true
}
DefaultWithArrow.parameters = {
  backgrounds: { default: 'dark' }
}

export const DefaultWithArrowBorder = Template.bind({})
DefaultWithArrowBorder.args = {
  showArrow: true,
  arrowBorderColor: 'greyCash300'
}

export const NotDefaultPlacement = Template.bind({})
NotDefaultPlacement.args = {
  showArrow: true,
  arrowBorderColor: 'greyCash300',
  placement: 'right-end'
}

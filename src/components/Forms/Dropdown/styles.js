import { Button as BaseButton } from 'components/Button'
import { Icon } from 'components/Icon'
import styled from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'
import { getTypography } from 'utils/getTypography'

import { BaseIconWrapper, BaseInput, BaseInputWrapper, BaseLabel } from '../commonStyles'

export const IconWrapper = styled(BaseIconWrapper)`
  grid-area: icon;
`

export const OptionIcon = styled(Icon)``

export const CustomSelect = styled(BaseInputWrapper)`
  display: grid;
  grid-template: 'label icon' 1.0625rem 'input icon' 1.375rem / minmax(0, 1fr) 1.5rem;
  column-gap: 1rem;
  row-gap: 0.1875rem;
  position: relative;
  white-space: nowrap;
`

export const CustomSelectCheckbox = styled(CustomSelect)`
  cursor: pointer;
`

export const Label = styled(BaseLabel)`
  grid-area: label;
`

export const DisplaySelection = styled(BaseInput)`
  grid-area: input;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ value, theme }) =>
    value === '' ? theme.pallete.darkBlueCash[200] : theme.pallete.darkBlueCash[500]};
`

export const OptionsBox = styled.ul`
  background-color: ${({ theme }) => theme.pallete.greyCash[100]};
  border-radius: 0.5rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.pallete.greyCash[300]};
  height: calc(
    ${({ numberOptions, optionSize }) =>
    `${optionSize === 'large' ? '3.5rem' : '2.5rem'} * ${
      numberOptions > 5 ? 5 : numberOptions
    } + 1rem`}
  );
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  overflow-y: auto;
  display: ${({ active }) => (active ? 'block' : 'none')};
  padding: ${({ theme }) => theme.padding.sm};
`

const BaseOption = styled.li`
  display: flex;
  align-items: center;
  ${({ theme }) => getTypography({ theme, styleType: 'input', styleColor: 'darkBlueCash500' })};
  padding: ${({ theme }) => theme.padding.md};
  gap: ${({ theme }) => theme.padding.sm};
  line-height: 1;
  border-radius: 0.25rem;
  pointer-events: auto;
  height: ${({ optionSize }) => (optionSize === 'large' ? '3.5rem' : '2.5rem')};
`

export const Option = styled(BaseOption)`
  cursor: pointer;
  background-color: ${({ theme, hovered }) =>
    hovered ? getColorFromName({ theme, styleColor: 'lightBlueCash300-24' }) : 'unset'};

  :hover {
    background-color: ${({ theme }) =>
    getColorFromName({ theme, styleColor: 'lightBlueCash100' })};
    color: ${({ theme }) => theme.pallete.lightBlueCash[300]};

    ${OptionIcon} {
      background-color: ${({ theme }) => theme.pallete.lightBlueCash[100]};
    }
  }

  :focus {
    background-color: ${({ theme }) =>
    getColorFromName({ theme, styleColor: 'lightBlueCash100' })};
    color: ${({ theme }) => theme.pallete.lightBlueCash[300]};

    ${OptionIcon} {
      background-color: ${({ theme }) => theme.pallete.lightBlueCash[300]};
    }
  }
`

export const OptionCheckbox = styled(BaseOption)`
  label,
  input {
    cursor: pointer;
  }
`

export const HiddenSelect = styled.select`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`

export const CheckboxOptionsWrapper = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.pallete.greyCash[100]};
  position: relative;
  height: calc(
    ${({ numberOptions, optionSize }) =>
    `${optionSize === 'large' ? '3.5rem' : '2.5rem'} * ${
      numberOptions > 4 ? 4 : numberOptions
    } + 1rem`}
  );
  border-radius: 0.5rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.pallete.greyCash[300]};
`

export const CheckboxOptionsBox = styled.ul`
  height: calc(
    ${({ numberOptions, optionSize }) =>
    `${optionSize === 'large' ? '3.5rem' : '2.5rem'} * ${
      numberOptions > 3 ? 3 : numberOptions
    } + 1rem`}
  );
  border-radius: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  overflow-y: auto;
  padding: ${({ theme }) => theme.padding.sm};
`

export const ClearOptions = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.pallete.greyCash[300]};
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  ${({ theme }) => getTypography({ theme, styleType: 'body2', styleColor: 'lightBlueCash300' })};
  height: ${({ optionSize }) => (optionSize === 'large' ? '3.5rem' : '2.5rem')};
`

export const Button = styled(BaseButton)`
  text-transform: unset;
  height: 100%;
  font-weight: 500 !important;
  width: auto;
`

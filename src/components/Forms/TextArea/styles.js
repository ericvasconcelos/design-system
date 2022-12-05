import { Text as TextComponent } from 'components/Text'
import styled from 'styled-components'

import { BaseInput, BaseInputWrapper, BaseLabel, BaseWrapper } from '../commonStyles'

export const Label = styled(BaseLabel)`
  color: ${({ theme }) => theme.pallete.darkBlueCash[200]};
`

export const Wrapper = styled(BaseWrapper)``

export const TextAreaWrapper = styled(BaseInputWrapper)`
  width: calc(100% - 2 * ${({ theme }) => theme.padding.lg});
  padding: ${({ theme }) => theme.padding.lg};

  height: auto;
`

export const StyledTextArea = styled(BaseInput)`
  height: ${({ autoGrow }) => (autoGrow ? 'auto' : '6rem')};

  min-height: 6rem;
  width: 100%;
  overflow: auto;
  padding: 0;
`

export const Text = styled(TextComponent)`
  font-weight: bolder;
  text-transform: uppercase;
`

import styled from 'styled-components'

export const Overlay = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  background-color: #000000e0;
  transition: all 0.2s ease;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ show }) => (show ? 'scale(1)' : 'scale(0)')};
  z-index: 10;
  &:focus {
    transform: scale(1);
  }
`

export const Delimiter = styled.hr`
  border-top: ${({ theme }) =>
    `${theme.pallete.greyCash[300]} ${theme.border.style.solid} ${theme.border.width.sm}`};
  width: 100%;
  height: 1px;
  margin: 0;
`
const getPadding = (theme, vertical, horizontal) =>
  `${theme.padding[vertical]} ${theme.padding[horizontal]}`

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.pallete.greyCash[100]};
  max-width: 550px;
  padding: ${({ theme }) => getPadding(theme, 'xl', 'lg')};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gutters.lg};
`

export const Content = styled.div``

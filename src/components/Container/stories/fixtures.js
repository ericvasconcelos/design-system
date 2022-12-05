import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.pallete.greyCashme[300]};
  display: flex;
  justify-content: center;
  align-items: center;
`

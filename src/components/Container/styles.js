import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: auto;
  width: ${({ theme }) => theme.grid.smMobile[1]};

  @media (min-width: 576px) {
    width: ${({ theme }) => theme.grid.mobile[1]};
  }

  @media (min-width: 768px) {
    width: ${({ theme }) => theme.grid.smTablet[1]};
  }

  @media (min-width: 992px) {
    width: ${({ theme }) => theme.grid.tablet[1]};
  }

  @media (min-width: 1200px) {
    width: ${({ theme }) => theme.grid.laptop[1]};
  }

  @media (min-width: 1400px) {
    width: ${({ theme }) => theme.grid.desktop[1]};
  }
`

import { Anchor } from 'components/Anchor'
import { Container } from 'components/Container'
import { List } from 'components/List'
import styled from 'styled-components'

export const LogoLink = styled(Anchor)`
  grid-area: logo;
`

export const NavList = styled(List)`
  grid-area: list;
  display: none;
  @media (min-width: 1200px) {
    display: flex;
  }
`

export const LoginBtn = styled(Anchor)`
  grid-area: login;
  display: none;
  @media (min-width: 750px) {
    display: flex;
  }
`

export const NavContainer = styled(Container)`
  display: grid;
  justify-content: flex-start;
  height: 104px;
  margin: auto;
  background-color: white;
  grid-template: 'logo list login' / 144px 3fr 224px;
  gap: ${({ theme }) => theme.gutters.xxl};
  align-items: center;
`

export const Nav = styled.nav`
  background: white;
  box-shadow: 0px 1px 0px rgba(51, 51, 51, 0.08);
  width: 100%;
  margin: 0;
`

import React from 'react'

import { Anchor } from 'components/Anchor'
import { Logo } from 'components/Logo'
import { bool } from 'prop-types'

import { Nav, NavList, LoginBtn, LogoLink, NavContainer } from './styles'

export const NavBar = ({ loggedIn }) => {
  const loginButtonUrl = loggedIn
    ? `${process.env.NEXT_PUBLIC_LOGOUT_URL}`
    : `${process.env.NEXT_PUBLIC_URL_PREFIX}/`
  const loginButtonLabel = loggedIn ? 'Sair da minha conta' : 'Acessar minha conta'
  const baseUrl = process.env.NEXT_PUBLIC_URL_PREFIX
  const NavItems = [
    <Anchor
      href="https://www.cashme.com.br/"
      passHref
      styleColor="dark"
      styleType="text"
      id="emprestimo"
    >
      Empréstimos
    </Anchor>,
    <Anchor
      href="https://www.cashme.com.br/condo/"
      passHref
      styleColor="dark"
      styleType="text"
      id="condo"
    >
      Condomínios
    </Anchor>,
    <Anchor
      href="https://www.cashme.com.br/credito-para-construtoras/"
      passHref
      styleColor="dark"
      styleType="text"
      id="inc"
    >
      Incorporadoras
    </Anchor>,
    <Anchor
      href="https://www.cashme.com.br/cashmember/"
      passHref
      styleColor="dark"
      styleType="text"
      id="parceiro"
    >
      Seja Parceiro
    </Anchor>,
    <Anchor
      href="https://www.cashme.com.br/blog/"
      passHref
      styleColor="dark"
      styleType="text"
      id="blog"
    >
      Blog
    </Anchor>,
    <Anchor
      href="https://www.cashme.com.br/fale-conosco/"
      passHref
      styleColor="dark"
      styleType="text"
      id="contato"
    >
      Fale conosco
    </Anchor>,
    <Anchor
      href="https://www.cashme.com.br/quem-somos/"
      passHref
      styleColor="dark"
      styleType="text"
      id="about"
    >
      Sobre nós
    </Anchor>
  ]

  return (
    <Nav data-testid="NavBar">
      <NavContainer>
        <LogoLink href={baseUrl}>
          <Logo />
        </LogoLink>
        <NavList isOrdered={false} flow="row" items={NavItems} justify="flex-start" gap="lg" />
        <LoginBtn
          styleType="secondary"
          styleColor="dark"
          borderRadius="rounded"
          id="loginBtn"
          size="medium"
          icon="userOutlined"
          href={loginButtonUrl}
        >
          {loginButtonLabel}
        </LoginBtn>
      </NavContainer>
    </Nav>
  )
}

NavBar.propTypes = {
  loggedIn: bool
}

NavBar.defaultProps = {
  loggedIn: false
}

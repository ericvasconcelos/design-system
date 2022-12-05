import React from 'react'

import preloadAll from 'jest-next-dynamic'
import { renderWithRouter } from 'utils/renderWithRouter'
import { styledRender } from 'utils/styledRender'

import { NavBar } from '../index.js'

beforeAll(async () => {
  await preloadAll()
})

describe('should render the component correctly when', () => {
  it('user is not logged in', () => {
    const { getByTestId, getByText } = renderWithRouter(<NavBar />)
    const component = getByTestId('NavBar')

    expect(getByText('Empréstimos')).toBeInTheDocument()
    expect(getByText('Incorporadoras')).toBeInTheDocument()
    expect(getByText('Seja Parceiro')).toBeInTheDocument()
    expect(getByText('Seja Parceiro')).toBeInTheDocument()
    expect(getByText('Fale conosco')).toBeInTheDocument()
    expect(getByText('Sobre nós')).toBeInTheDocument()
    expect(getByText('Acessar minha conta')).toBeInTheDocument()

    expect(component).toMatchSnapshot()
  })

  it('user is logged in', () => {
    const { getByTestId, getByText } = styledRender(<NavBar loggedIn />)
    const component = getByTestId('NavBar')

    expect(getByText('Empréstimos')).toBeInTheDocument()
    expect(getByText('Incorporadoras')).toBeInTheDocument()
    expect(getByText('Seja Parceiro')).toBeInTheDocument()
    expect(getByText('Seja Parceiro')).toBeInTheDocument()
    expect(getByText('Fale conosco')).toBeInTheDocument()
    expect(getByText('Sobre nós')).toBeInTheDocument()
    expect(getByText('Sair da minha conta')).toBeInTheDocument()

    expect(component).toMatchSnapshot()
  })
})

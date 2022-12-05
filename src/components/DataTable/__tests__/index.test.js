import React from 'react'

import userEvent from '@testing-library/user-event'
import { DataTable } from 'components/DataTable'
import { styledRender } from 'utils/styledRender'

import { headers, data, collapse, fourItems } from './fixtures'

describe('Render DataTable Component when', () => {
  const onChangePage = jest.fn()
  const onSort = jest.fn()

  it('set perPage and have exact 1 item left', () => {
    const { getByText } = styledRender(
      <DataTable
        headers={headers}
        data={fourItems}
        totalRows={5}
        currentPage={1}
        numberPages={2}
        perPage={4}
        onChangePage={onChangePage}
        onSort={onSort}
        showMoreItemsText="Mostrar mais (1)"
      />
    )

    expect(getByText('Mostrar mais (1)')).toBeInTheDocument()
  })

  it('have common values', () => {
    const { container, getByText, getAllByText } = styledRender(
      <DataTable
        headers={headers}
        data={data}
        totalRows={10}
        currentPage={1}
        numberPages={6}
        onChangePage={onChangePage}
        onSort={onSort}
      />
    )


    expect(getAllByText('Label')).toHaveLength(10)
    expect(getByText('Header 1')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('have collapse values', () => {
    const { container, getAllByText } = styledRender(
      <DataTable
        headers={headers}
        data={data}
        totalRows={10}
        currentPage={1}
        numberPages={6}
        onChangePage={onChangePage}
        onSort={onSort}
        collapse={collapse}
      />
    )

    expect(getAllByText('Label')).toHaveLength(10)
    expect(getAllByText('Header 5')[0]).not.toBeVisible()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('click collapse button open new row', () => {
    const { getAllByText, getAllByRole } = styledRender(
      <DataTable
        headers={headers}
        data={data}
        totalRows={10}
        currentPage={1}
        numberPages={6}
        onChangePage={onChangePage}
        onSort={onSort}
        collapse={collapse}
      />
    )
    const buttons = getAllByRole('button', { name: 'expandir linha' })
    const rowsCollapse = getAllByText('Header 5')

    userEvent.click(buttons[0])

    expect(buttons).toHaveLength(10)
    expect(rowsCollapse[0]).toBeVisible()
  })

  it('click sortable header call callback', () => {
    const { getByText } = styledRender(
      <DataTable
        headers={headers}
        data={data}
        totalRows={10}
        currentPage={1}
        numberPages={6}
        onChangePage={onChangePage}
        onSort={onSort}
      />
    )
    const headerSortable = getByText('Header 2')

    userEvent.click(headerSortable)

    expect(onSort).toHaveBeenCalledWith('header2')
  })

  it('click show more call callback', () => {
    const { getByRole } = styledRender(
      <DataTable
        headers={headers}
        data={data}
        totalRows={10}
        currentPage={1}
        numberPages={10}
        onChangePage={onChangePage}
        onSort={onSort}
      />
    )
    const showMoreButton = getByRole('button')

    userEvent.click(showMoreButton)

    expect(onChangePage).toHaveBeenCalledWith(2)
  })

  it('have one page dont render pagination', () => {
    const { queryByRole } = styledRender(
      <DataTable
        headers={headers}
        data={data}
        totalRows={10}
        currentPage={1}
        numberPages={1}
        onChangePage={onChangePage}
        onSort={onSort}
      />
    )
    const showMoreButton = queryByRole('button')

    expect(showMoreButton).not.toBeInTheDocument()
  })

  it('its the last page dont render pagination', () => {
    const { queryByRole } = styledRender(
      <DataTable
        headers={headers}
        data={data}
        totalRows={10}
        currentPage={10}
        numberPages={10}
        onChangePage={onChangePage}
        onSort={onSort}
      />
    )
    const showMoreButton = queryByRole('button')

    expect(showMoreButton).not.toBeInTheDocument()
  })

  it('have less that 10 rest items render exact number', () => {
    const { getByText } = styledRender(
      <DataTable
        headers={headers}
        data={data}
        totalRows={15}
        currentPage={1}
        numberPages={2}
        onChangePage={onChangePage}
        onSort={onSort}
        perPage={5}
        showMoreItemsText="Mostrar mais (5)"
      />
    )

    expect(getByText('Mostrar mais (5)')).toBeInTheDocument()
  })

  it('have one only rest item render exact number', () => {
    const { getByText } = styledRender(
      <DataTable
        headers={headers}
        data={data}
        totalRows={11}
        currentPage={1}
        numberPages={2}
        onChangePage={onChangePage}
        onSort={onSort}
        perPage={1}
        showMoreItemsText="Mostrar mais 1"
      />
    )

    expect(getByText('Mostrar mais 1')).toBeInTheDocument()
  })
})

import React, { useRef, useState } from 'react'

import { Icon } from 'components/Icon'
import { string, arrayOf, shape, bool, func, number, object } from 'prop-types'

import { RowTable } from './RowTable'
import {
  WrapperTable,
  Table,
  Header,
  HeaderContent,
  IconSort,
  Pagination,
  ShowMoreButton,
  Loader,
  Text
} from './styles'

/** Componente de tabela é utilizado para exibir dados em forma de tabela */

export const DataTable = ({
  headers,
  collapse,
  data,
  numberPages,
  currentPage,
  onChangePage,
  onSort,
  showMoreItemsText,
  isLoading,
  isPageLoading,
  messageWhenEmpty,
  className
}) => {
  const tbodyRef = useRef(null)
  const theadRef = useRef(null)
  const cellRefs = useRef([])
  const [currentRowCell, setCurrentRowCell] = useState([0, 0])

  const handleFocus = (currentRow, currentCell) => {
    setCurrentRowCell([currentRow, currentCell])
  }

  const tableKeyDownHandler = (event, indexRow, indexCel) => {
    const rowsLength = tbodyRef.current.children.length
    const cellLength = theadRef.current.children.length

    const handleArrowRight = () => {
      event.preventDefault()
      if (indexCel < cellLength - 1) cellRefs.current[indexRow][indexCel + 1].focus()
    }
    const handleArrowLeft = () => {
      event.preventDefault()
      if (indexCel > 0) cellRefs.current[indexRow][indexCel - 1].focus()
    }
    const handleArrowDown = () => {
      event.preventDefault()
      if (indexRow < rowsLength - 1) cellRefs.current[indexRow + 1][indexCel].focus()
    }
    const handleArrowUp = () => {
      event.preventDefault()
      if (indexRow > 0) cellRefs.current[indexRow - 1][indexCel].focus()
    }
    const handleHome = () => {
      event.preventDefault()
      if (!event.ctrlKey) {
        return cellRefs.current[indexRow][0].focus()
      }
      cellRefs.current[0][0].focus()
    }

    const handleEnd = () => {
      event.preventDefault()
      if (!event.ctrlKey) {
        return cellRefs.current[indexRow][cellLength - 1].focus()
      }
      cellRefs.current[rowsLength - 1][cellLength - 1].focus()
    }

    const keyToAction = {
      ArrowRight: handleArrowRight,
      ArrowLeft: handleArrowLeft,
      ArrowDown: handleArrowDown,
      ArrowUp: handleArrowUp,
      Home: handleHome,
      End: handleEnd,
      Default: () => {}
    }

    return (keyToAction[event.key] || keyToAction.Default)()
  }

  return (
    <>
      <WrapperTable data-testid="DataTable" className={className}>
        <Table role="grid" aria-rowcount={data.length}>
          <thead>
            <tr ref={theadRef} role="row">
              {headers.map(header => (
                <Header
                  role="columnheader"
                  onClick={header.sortable ? () => onSort(header.key) : null}
                  sortable={header.sortable}
                  key={header.key}
                  id={`header-${header.key}`}
                >
                  <HeaderContent>
                    {header.label}
                    {header.sortable && (
                      <IconSort icon="chevronDown" styleColor="darkBlueCash500" />
                    )}
                  </HeaderContent>
                </Header>
              ))}
              {collapse.length !== 0 && <Header key="collapse" isCollapse />}
            </tr>
          </thead>
          {!isLoading && (
            <tbody ref={tbodyRef}>
              {data.map((row, index) => (
                <RowTable
                  key={row.key}
                  index={index}
                  data={row}
                  headers={headers}
                  collapse={collapse}
                  currentRowCell={currentRowCell}
                  handleFocus={handleFocus}
                  cellRefs={cellRefs}
                  tableKeyDownHandler={tableKeyDownHandler}
                />
              ))}
            </tbody>
          )}
        </Table>
        {data.length === 0 && !isLoading && messageWhenEmpty && <Text>{messageWhenEmpty}</Text>}
        {isLoading && <Loader />}
      </WrapperTable>
      {numberPages > 1 && currentPage < numberPages && (
        <Pagination>
          <ShowMoreButton disabled={isPageLoading} onClick={() => onChangePage(currentPage + 1)}>
            {isPageLoading ? (
              <Icon icon="loader" styleColor="lightBlueCash300" />
            ) : (
              `${showMoreItemsText}`
            )}
          </ShowMoreButton>
        </Pagination>
      )}
    </>
  )
}

DataTable.propTypes = {
  /** conteúdo da cabeçalho */
  headers: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
      sortable: bool.isRequired
    })
  ).isRequired,
  /** define se é expansivel */
  collapse: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired
    })
  ),
  /** dados a serem mostrados */
  // eslint-disable-next-line react/forbid-prop-types
  data: arrayOf(object).isRequired,
  /** total de linhas */
  totalRows: number.isRequired,
  /** numero de páginas (quando há paginação) */
  numberPages: number.isRequired,
  /** página atual (quando há paginação) */
  currentPage: number,
  /** quantos items mostrado por página */
  perPage: number,
  /** função chamada ao mudar de página */
  onChangePage: func,
  /** função chamada ao ordenar */
  onSort: func,
  className: string,
  /** texto mostrado na opção de mostrar mais itens */
  showMoreItemsText: string,
  /** define se está carregando */
  isLoading: bool,
  /** define se a página está carregando */
  isPageLoading: bool,
  /** mensagem quando a tabela estiver vazia */
  messageWhenEmpty: string
}

DataTable.defaultProps = {
  className: '',
  collapse: [],
  currentPage: 1,
  perPage: 10,
  onChangePage: () => {},
  onSort: () => {},
  showMoreItemsText: 'Mostrar mais',
  isLoading: false,
  isPageLoading: false,
  messageWhenEmpty: null
}

import React, { useState } from 'react'

import { Icon } from 'components/Icon'
import { string, object, arrayOf, shape, number, array, func, instanceOf } from 'prop-types'

import { Row, Column, ButtonIcon, ClickableColumn } from './styles'

export const RowTable = ({
  index,
  data,
  headers,
  collapse,
  currentRowCell,
  handleFocus,
  cellRefs,
  tableKeyDownHandler
}) => {
  const [isCollapse, setIsCollapse] = useState(true)

  const collapseKeyHandler = event => {
    if (event.key === 'Enter') {
      setIsCollapse(!isCollapse)
    } else {
      tableKeyDownHandler(event, index, headers.length)
    }
  }

  return (
    <>
      <Row role="row" aria-rowindex={index} key={data.key}>
        {headers.map((header, colIndex) => (
          <Column
            as="td"
            role="cell"
            key={header.key}
            headers={`header-${header.key}`}
            onFocus={() => handleFocus(index, colIndex)}
            tabIndex={currentRowCell.toString() === [index, colIndex].toString() ? 0 : -1}
            ref={el => {
              if (!cellRefs.current[index]) {
                cellRefs.current[index] = []
              }
              cellRefs.current[index][colIndex] = el
            }}
            onKeyDown={event => tableKeyDownHandler(event, index, colIndex)}
          >
            {typeof data[header.key] === 'string' ? data[header.key] : data[header.key]()}
          </Column>
        ))}
        {collapse.length !== 0 && (
          <ClickableColumn
            as="td"
            role="cell"
            key="collapse"
            onClick={() => setIsCollapse(!isCollapse)}
            onFocus={() => handleFocus(index, headers.length)}
            ref={el => {
              cellRefs.current[index][headers.length] = el
            }}
            tabIndex={currentRowCell.toString() === [index, headers.length].toString() ? 0 : -1}
            onKeyDown={event => {
              collapseKeyHandler(event)
            }}
          >
            <ButtonIcon type="button" tabIndex={-1}>
              <Icon
                role="button"
                ariaLabel="expandir linha"
                icon={isCollapse ? 'chevronDown' : 'chevronUp'}
                styleColor="greyCash400"
              />
            </ButtonIcon>
          </ClickableColumn>
        )}
      </Row>
      {collapse.length !== 0 && (
        <Row collapse={isCollapse} role="row" aria-rowindex={index} key={`collapse-${data.key}`}>
          <Column as="td" colSpan={headers.length + 1}>
            {collapse.map(item => (
              <div key={item.label}>
                <p>
                  <strong>{item.label}</strong>
                </p>
                <p>
                  {data[item.key]}
                </p>
              </div>
            ))}
          </Column>
        </Row>
      )}
    </>
  )
}

RowTable.propTypes = {
  index: number.isRequired,
  headers: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired
    })
  ).isRequired,
  collapse: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired
    })
  ).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentRowCell: array.isRequired,
  handleFocus: func.isRequired,
  cellRefs: shape({ current: instanceOf(Array) }).isRequired,
  tableKeyDownHandler: func.isRequired
}

import { Icon } from 'components/Icon'
import { Loader as LoaderComponent } from 'components/Loader'
import { Text as TextComponent } from 'components/Text'
import styled from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'
import { getTypography } from 'utils/getTypography'

export const WrapperTable = styled.div`
  @media (max-width: 1024px) {
    overflow-x: auto;
  }
`

export const Loader = styled(LoaderComponent)`
  margin: auto;
  margin-top: unset;
  height: 100%;
`

export const Table = styled.table`
  border-collapse: separate;
  width: 100%;
  margin: auto;
  border-spacing: ${({ theme }) => `0 ${theme.gutters.sm}`};

  td {
    ${({ theme }) =>
    getTypography({
      theme,
      styleType: 'body2'
    })}
  }

  td:first-child,
  th:first-child {
    border-radius: 8px 0 0 8px;
  }

  td:last-child,
  th:last-child {
    border-radius: 0 8px 8px 0;
  }
`

export const Header = styled.th`
  padding: ${({ theme }) => theme.padding.md};
  position: relative;
  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'auto')};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gutters.sm};
  white-space: nowrap;
  text-align: left;
  ${({ theme }) =>
    getTypography({
      theme,
      styleType: 'body2Medium',
      styleColor: 'darkBlueCash500'
    })}
`

export const IconSort = styled(Icon)`
  width: 16px;
  height: 16px;
  mask-size: 16px;
  background: ${({ theme }) => theme.pallete.darkBlueCash[500]};
`

export const Column = styled.th`
  padding: ${({ theme }) => theme.padding.md};
  text-align: left;
  border: 1px solid transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.pallete.lightBlueCash[200]};
    box-shadow: 0 0 0 4px
      ${({ theme }) => getColorFromName({ theme, styleColor: 'lightBlueCash300-24' })};
  }
  ${({ theme }) =>
    getTypography({
      theme,
      styleType: 'body2',
      styleColor: 'darkBlueCash500'
    })}
`

export const ClickableColumn = styled(Column)`
  cursor: pointer;
  padding: 0;
  vertical-align: middle;
  line-height: 0;
  max-width: 80px;

  
  
  `

export const Row = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: ${({ collapse }) => (collapse ? 'none' : 'table-row')};
  background-color: ${({ theme }) => theme.pallete.greyCash[100]};
  border-top-left-radius: 10px;
  
  

`

export const Pagination = styled.div`
  text-align: center;
`

export const ShowMoreButton = styled.button`
  display: flex;
  justify-content: center;
  &:focus {
    border: 1px solid ${({ theme }) => theme.pallete.lightBlueCash[200]};
    box-shadow: 0 0 0 4px
      ${({ theme }) => getColorFromName({ theme, styleColor: 'lightBlueCash300-24' })};
  }
  ${({ theme }) =>
    getTypography({
      theme,
      styleType: 'body2Medium',
      styleColor: 'lightBlueCash300'
    })}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ theme }) => theme.pallete.greyCash[100]};
  width: 100%;
  border-radius: 8px;
  padding: ${({ theme }) => theme.padding.lg};
`

export const Text = styled(TextComponent)`
  display: flex;
  justify-content: center;
  ${({ theme }) =>
    getTypography({
      theme,
      styleType: 'body2',
      styleColor: 'darkBlueCash500'
    })}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  background-color: ${({ theme }) => theme.pallete.greyCash[100]};
  width: 100%;
  border-radius: 8px;
  padding: ${({ theme }) => theme.padding.lg};
`

export const ButtonIcon = styled.button`
  cursor: pointer;
`

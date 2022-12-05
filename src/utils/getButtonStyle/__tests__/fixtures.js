import { theme } from 'styles/theme'
import { getBackgroundColor } from 'utils/getBackgroundColor'
import { getBorder } from 'utils/getBorder'
import { getBorderRadius } from 'utils/getBorderRadius'
import { getPadding } from 'utils/getPadding'
import { getTypography } from 'utils/getTypography'

export const possibleButtonStyles = [
  {
    borderRadius: 'default',
    styleColor: 'blue',
    styleType: 'primary',
    size: 'medium',
    disabled: false,
    isLoading: false,
    expanded: false,
    expected: `${getBorder({
      theme,
      borderWidth: 'md',
      borderStyle: 'solid',
      borderColor: 'lightBlueCash300'
    })}
    ${getBorderRadius({ theme, borderRadius: 'sm' })}
    ${getBackgroundColor({ theme, styleColor: 'lightBlueCash300' })}
    ${getPadding({ theme, top: 'md', right: 'lg' })}
    ${getTypography({ theme, styleType: 'button', styleColor: 'greyCash100', decoration: 'none' })}
    width: auto;
    text-align: left;
    gap: 0.5rem;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    height: 56px;
    opacity: 1;
    justify-content: space-between;
    text-transform: unset;

    >div {
      margin: none;
    }


  &:hover:enabled {
    background-color: #8DC6FF;
    border: 2px solid #8DC6FF;
    color: #FFFFFF;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: none;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;


    >div {
      background: #FFFFFF;
    }
  }

  &:active:enabled {
    background-color: #1C49D9;
    border: 2px solid #1C49D9;

    >div {
      background: #FFFFFF;
    }

    color: #FFFFFF;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: none;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;

  }`
  },
  {
    borderRadius: 'rounded',
    styleColor: 'blue',
    styleType: 'secondary',
    size: 'small',
    disabled: false,
    isLoading: false,
    expanded: true,
    expected: `${getBorder({
      theme,
      borderWidth: 'md',
      borderStyle: 'solid',
      borderColor: 'lightBlueCash300'
    })}
    ${getBorderRadius({ theme, borderRadius: 'xxxl' })}
    ${getBackgroundColor({ theme, styleColor: 'transparent' })}
    ${getPadding({ theme, top: 'sm', right: 'md' })}
    ${getTypography({
    theme,
    styleType: 'buttonSm',
    styleColor: 'lightBlueCash300',
    decoration: 'none'
  })}
    width: 100%;
    text-align: left;
    gap: 0.5rem;
    align-items: center;
    display: flex;
    cursor: pointer;
    height: 44px;
    opacity: 1;
    justify-content: space-between;
    text-transform: uppercase;

    >div {
      margin: none;
    }


  &:hover:enabled {
    background-color: #003FF2;
    border: 2px solid #003FF2;
    color: #FFFFFF;
font-size: 0.625rem;
font-weight: 500;
line-height: 1rem;
text-decoration: none;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;


    >div {
      background: #FFFFFF;
    }
  }

  &:active:enabled {
    background-color: #1C49D9;
    border: 2px solid #1C49D9;

    >div {
      background: #FFFFFF;
    }

    color: #FFFFFF;
font-size: 0.625rem;
font-weight: 500;
line-height: 1rem;
text-decoration: none;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;

  }`
  },
  {
    borderRadius: 'rounded',
    styleColor: 'blue',
    styleType: 'text',
    size: 'large',
    disabled: false,
    isLoading: false,
    expanded: true,
    expected: `border: 2px solid undefined;
    border-radius: 4rem;
    background-color: none;
    padding: 0;
    ${getTypography({
    theme,
    styleType: 'link',
    styleColor: 'lightBlueCash300',
    decoration: 'none'
  })}
    width: 100%;
    text-align: left;
    gap: 0.5rem;
    align-items: center;
    display: flex;
    cursor: pointer;
    height: 60px;
    opacity: 1;
    justify-content: space-between;
    text-transform: unset;

    >div {
      margin: none;
    }


  &:hover:enabled {
    background-color: none;
    border: 2px solid none;
    color: none;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: none;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;


    >div {
      background: ;
    }
  }

  &:active:enabled {
    background-color: none;
    border: 2px solid none;

    >div {
      background: none;
    }

    color: none;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: none;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;

  }`
  },
  {
    borderRadius: 'rounded',
    styleColor: 'blue',
    styleType: 'link',
    size: 'large',
    disabled: false,
    isLoading: false,
    expanded: true,
    expected: `border: 2px solid undefined;
    border-radius: 4rem;
    background-color: none;
    padding: 0;
    ${getTypography({
    theme,
    styleType: 'link',
    styleColor: 'lightBlueCash300',
    decoration: 'underline'
  })}
    width: 100%;
    text-align: left;
    gap: 0.5rem;
    align-items: center;
    display: flex;
    cursor: pointer;
    height: 60px;
    opacity: 1;
    justify-content: space-between;
    text-transform: unset;

    >div {
      margin: none;
    }


  &:hover:enabled {
    background-color: none;
    border: 2px solid none;
    color: none;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: underline;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;


    >div {
      background: ;
    }
  }

  &:active:enabled {
    background-color: none;
    border: 2px solid none;

    >div {
      background: none;
    }

    color: none;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: underline;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;

  }`
  },
  {
    borderRadius: 'rounded',
    styleColor: 'blue',
    styleType: 'link',
    size: 'large',
    disabled: false,
    isLoading: false,
    expanded: true,
    expected: `border: 2px solid undefined;
    border-radius: 4rem;
    background-color: none;
    padding: 0;
    ${getTypography({
    theme,
    styleType: 'link',
    styleColor: 'lightBlueCash300',
    decoration: 'underline'
  })}
    width: 100%;
    text-align: left;
    gap: 0.5rem;
    align-items: center;
    display: flex;
    cursor: pointer;
    height: 60px;
    opacity: 1;
    justify-content: space-between;
    text-transform: unset;

    >div {
      margin: none;
    }


  &:hover:enabled {
    background-color: none;
    border: 2px solid none;
    color: none;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: underline;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;


    >div {
      background: ;
    }
  }

  &:active:enabled {
    background-color: none;
    border: 2px solid none;

    >div {
      background: none;
    }

    color: none;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: underline;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;

  }`
  },
  {
    borderRadius: 'rounded',
    styleColor: 'blue',
    styleType: 'link',
    size: 'large',
    disabled: false,
    isLoading: true,
    expanded: true,
    expected: `border: 2px solid undefined;
    border-radius: 4rem;
    background-color: none;
    padding: 0;
    ${getTypography({
    theme,
    styleType: 'link',
    styleColor: 'lightBlueCash300',
    decoration: 'underline'
  })}
    width: 100%;
    text-align: left;
    gap: 0.5rem;
    align-items: center;
    display: flex;
    cursor: progress;
    height: 60px;
    opacity: 1;
    justify-content: space-between;
    text-transform: unset;

    >div {
      margin: none;
    }

false`
  },
  {
    borderRadius: 'rounded',
    styleColor: 'blue',
    styleType: 'primary',
    size: 'large',
    disabled: true,
    isLoading: false,
    expanded: true,
    expected: `${getBorder({
      theme,
      borderWidth: 'md',
      borderStyle: 'solid',
      borderColor: 'lightBlueCash300'
    })}
    ${getBorderRadius({ theme, borderRadius: 'xxxl' })}
    ${getBackgroundColor({ theme, styleColor: 'lightBlueCash300' })}
    ${getPadding({ theme, top: 'xl', right: 'lg' })}
    ${getTypography({ theme, styleType: 'button', styleColor: 'greyCash100', decoration: 'none' })}
    width: 100%;
    text-align: left;
    gap: 0.5rem;
    align-items: center;
    display: flex;
    cursor: not-allowed;
    height: 60px;
    opacity: 0.16;
    justify-content: space-between;
    text-transform: unset;

    >div {
      margin: none;
    }


  &:hover:enabled {
    background-color: #8DC6FF;
    border: 2px solid #8DC6FF;
    color: #FFFFFF;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: none;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;


    >div {
      background: #FFFFFF;
    }
  }

  &:active:enabled {
    background-color: #1C49D9;
    border: 2px solid #1C49D9;

    >div {
      background: #FFFFFF;
    }

    color: #FFFFFF;
font-size: 0.75rem;
font-weight: 500;
line-height: 1.5rem;
text-decoration: none;
letter-spacing: 0rem;
font-family: 'DM Sans', sans-serif;

  }`
  }
]

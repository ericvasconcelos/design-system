const gridBasedSizes = {
  xxs: '0rem',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xll: '2.5rem',
  xxl: '3rem',
  xxxl: '4rem'
}

export const theme = {
  pallete: {
    darkBlueCash: {
      100: '#A6B5BB',
      200: '#455A73',
      300: '#00224B',
      400: '#00224B',
      500: '#00224B'
    },
    goldCash: {
      100: '#F7EBD2',
      200: '#EDD09D',
      300: '#E4B168',
      400: '#B37533',
      500: '#663B11'
    },
    lightBlueCash: {
      100: '#D7EBFF',
      200: '#8DC6FF',
      300: '#003FF2',
      400: '#1C49D9',
      500: '#02279E'
    },
    cyanCash: {
      100: '#EDFCFF',
      200: '#CFF7FF',
      300: '#00BFFF',
      400: '#008FBF',
      500: '#006080'
    },
    greyCash: {
      100: '#FFFFFF',
      200: '#F0F0F2',
      300: '#A6B5BB',
      400: '#69788C',
      500: '#00224B'
    },
    success: {
      100: '#C9FAE5',
      200: '#73E5A4',
      300: '#01D17C',
      400: '#01B36A',
      500: '#019257'
    },
    error: {
      100: '#FFCECE',
      200: '#FF8C8C',
      300: '#FF4949',
      400: '#D93E3E',
      500: '#B33333'
    },
    warning: {
      100: '#FFDCB1',
      200: '#FFBB80',
      300: '#FF8B3D',
      400: '#FF7935',
      500: '#FF672D'
    }
  },
  icons: {
    arrowDown: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/arrow-down.svg`,
    arrowLeft: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/arrow-left.svg`,
    arrowRight: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/arrow-rigth.svg`,
    arrowUp: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/arrow-up.svg`,
    attentionSmall: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/attention-small.svg`,
    book: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/book.svg`,
    burger: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/burger.svg`,
    businessAssociate: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/business-associate.svg`,
    calculator: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/calculator.svg`,
    calculatorFading: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/calculator-fading.svg`,
    calendar: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/calendar.svg`,
    caution: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/caution.svg`,
    check: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/check.svg`,
    checkBold: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/check-bold.svg`,
    chevronDown: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/chevron-down.svg`,
    chevronDownOutlined: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/chevron-down-outline.svg`,
    chevronLeft: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/chevron-left.svg`,
    chevronLeftOutlined: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/chevron-left-outline.svg`,
    chevronRight: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/chevron-right.svg`,
    chevronRightOutlined: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/chevron-right-outline.svg`,
    chevronUp: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/chevron-up.svg`,
    chevronUpOutlined: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/chevron-up-outline.svg`,
    close: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/close.svg`,
    closedEye: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/closed-eye.svg`,
    comment: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/comment.svg`,
    company: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/company.svg`,
    copy: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/copy.svg`,
    createNew: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/create-new.svg`,
    document: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/document.svg`,
    download: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/download.svg`,
    error: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/error.svg`,
    eye: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/eye.svg`,
    facebook: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/facebook.svg`,
    homeRenovation: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/home_renovation.svg`,
    houseLoan: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/house_loan.svg`,
    info: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/info.svg`,
    instagram: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/instagram.svg`,
    lightBulb: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/light-bulb.svg`,
    like: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/like.svg`,
    linkedin: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/linkedin.svg`,
    loader: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/loader.svg`,
    loanForNegatives: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/loan_for_negatives.svg`,
    mail: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/mail.svg`,
    meiLoan: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/mei_loan.svg`,
    money: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/money.svg`,
    moneyFill: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/moneyFill.svg`,
    more: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/more.svg`,
    pin: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/pin.svg`,
    onlineLoan: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/online_loan.svg`,
    phone: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/phone.svg`,
    questionMarkOutlined: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/question-mark-outline.svg`,
    rewards: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/rewards.svg`,
    ring: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/ring.svg`,
    rocket: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/rocket.svg`,
    star: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/star.svg`,
    search: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/search.svg`,
    success: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/success.svg`,
    twitter: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/twitter.svg`,
    triangleRight: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/triangle-right.svg`,
    user: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/user.svg`,
    userOutlined: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/user-outline.svg`,
    verticalMore: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/vertical-more.svg`,
    watch: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/watch.svg`,
    whiteError: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/white-error.svg`,
    whiteSuccess: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/white-success.svg`,
    whiteWarning: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/white-warning.svg`,
    warning: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/warning.svg`,
    warningOutline: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/warning-outline.svg`,
    youtube: `${process.env.NEXT_PUBLIC_ICON_PREFIX}/youtube.svg`
  },
  typography: {
    display: {
      desktop: {
        size: '3.625rem',
        lineHeight: '4rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '-0.02rem'
      },
      mobile: {
        size: '3.625rem',
        lineHeight: '4rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '-0.02rem'
      }
    },
    title1: {
      desktop: {
        size: '3rem',
        lineHeight: '3.3rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '-0.02rem'
      },
      mobile: {
        size: '3rem',
        lineHeight: '3.3rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '-0.02rem'
      }
    },
    title2: {
      desktop: {
        size: '2.25rem',
        lineHeight: '2.475rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '-0.02rem'
      },
      mobile: {
        size: '2.25rem',
        lineHeight: '2.475rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '-0.02rem'
      }
    },
    title3: {
      desktop: {
        size: '1.5rem',
        lineHeight: '1.8rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '-0.02rem'
      },
      mobile: {
        size: '1.5rem',
        lineHeight: '1.8rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '-0.02rem'
      }
    },
    title4: {
      desktop: {
        size: '1.1875rem',
        lineHeight: '1.544rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '1.1875rem',
        lineHeight: '1.544rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    subtitle: {
      desktop: {
        size: '1.1875rem',
        lineHeight: '1.544rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '1.1875rem',
        lineHeight: '1.544rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    body1: {
      desktop: {
        size: '1.0625rem',
        lineHeight: '1.381rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '1.0625rem',
        lineHeight: '1.381rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    body1Medium: {
      desktop: {
        size: '1.0625rem',
        lineHeight: '1.381rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '1.0625rem',
        lineHeight: '1.381rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    body2: {
      desktop: {
        size: '0.9375rem',
        lineHeight: '1.219rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '0.9375rem',
        lineHeight: '1.219rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    body2Medium: {
      desktop: {
        size: '0.9375rem',
        lineHeight: '1.219rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '0.9375rem',
        lineHeight: '1.219rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    body3: {
      desktop: {
        size: '0.8125rem',
        lineHeight: '1.056rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '0.8125rem',
        lineHeight: '1.056rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    body3Medium: {
      desktop: {
        size: '0.8125rem',
        lineHeight: '1.056rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '0.8125rem',
        lineHeight: '1.056rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    button: {
      desktop: {
        size: '0.75rem',
        lineHeight: '1.5rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '0.75rem',
        lineHeight: '1.5rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    buttonSm: {
      desktop: {
        size: '0.625rem',
        lineHeight: '1rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '0.625rem',
        lineHeight: '1rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    input: {
      desktop: {
        size: '1.0625rem',
        lineHeight: '1.381rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '1.0625rem',
        lineHeight: '1.381rem',
        weight: '400',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    label: {
      desktop: {
        size: '0.5rem',
        lineHeight: '1rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '0.5rem',
        lineHeight: '1rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    link: {
      desktop: {
        size: '0.75rem',
        lineHeight: '1.5rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '0.75rem',
        lineHeight: '1.5rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      }
    },
    tag: {
      desktop: {
        size: '0.5rem',
        lineHeight: '1rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      },
      mobile: {
        size: '0.5rem',
        lineHeight: '1rem',
        weight: '500',
        family: 'DM Sans',
        spacing: '0rem'
      }
    }
  },
  border: {
    width: { sm: '1px', md: '2px', lg: '3px' },
    style: { solid: 'solid' },
    radius: {
      ...gridBasedSizes,
      rounded: '50%'
    }
  },
  gutters: {
    ...gridBasedSizes
  },
  padding: {
    ...gridBasedSizes
  },
  images: {
    notFound: `${process.env.NEXT_PUBLIC_URL_PREFIX}/images/not-found.svg`,
    logos: {
      white: {
        path: `${process.env.NEXT_PUBLIC_LOGO_PREFIX}/white-no-text.svg`,
        desc: 'Logo CashMe branco sem texto'
      },
      whiteText: {
        path: `${process.env.NEXT_PUBLIC_LOGO_PREFIX}/white-with-text.svg`,
        desc: 'Logo CashMe branco'
      },
      darkBlue: {
        path: `${process.env.NEXT_PUBLIC_LOGO_PREFIX}/dark-blue-no-text.svg`,
        desc: 'Logo CashMe azul escuro sem texto'
      },
      darkBlueText: {
        path: `${process.env.NEXT_PUBLIC_LOGO_PREFIX}/dark-blue-with-text.svg`,
        desc: 'Logo CashMe azul escuro'
      },
      lightBlue: {
        path: `${process.env.NEXT_PUBLIC_LOGO_PREFIX}/light-blue-no-text.svg`,
        desc: 'Logo CashMe azul claro sem texto'
      },
      lightBlueText: {
        path: `${process.env.NEXT_PUBLIC_LOGO_PREFIX}/light-blue-with-text.svg`,
        desc: 'Logo CashMe azul claro'
      },
      newBlue: {
        path: `${process.env.NEXT_PUBLIC_LOGO_PREFIX}/new-blue-no-text.svg`,
        desc: 'Logo CashMe novo azul sem texto'
      },
      newBlueText: {
        path: `${process.env.NEXT_PUBLIC_LOGO_PREFIX}/new-blue-with-text.svg`,
        desc: 'Logo CashMe novo azul'
      }
    }
  },
  grid: {
    smMobile: {
      1: '100%',
      2: '128px',
      gutter: gridBasedSizes.xl
    },
    mobile: {
      1: '540px',
      2: '144px',
      gutter: gridBasedSizes.lg
    },
    smTablet: {
      1: '720px',
      2: '352px',
      3: '224px',
      6: '96px',
      gutter: gridBasedSizes.xl
    },
    tablet: {
      1: '960px',
      2: '352px',
      3: '224px',
      6: '96px',
      gutter: gridBasedSizes.xl
    },
    laptop: {
      1: '1140px',
      2: '592px',
      3: '384px',
      4: '280px',
      12: '72px',
      gutter: gridBasedSizes.xl
    },
    desktop: {
      1: '1320px',
      2: '736px',
      3: '480px',
      4: '352px',
      12: '96px',
      gutter: gridBasedSizes.xl
    }
  }
}

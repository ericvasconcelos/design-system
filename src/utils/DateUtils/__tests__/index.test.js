import { DateUtils } from '../index.js'

describe('Should validate date when', () => {
  it('valid date format pt-br', () => {
    expect(DateUtils.validate('29/02/1991')).toBeTruthy()
  })

  it('invalid day format pt-br', () => {
    expect(DateUtils.validate('30/02/1991')).toBeFalsy()
  })

  it('invalid month format pt-br', () => {
    expect(DateUtils.validate('30/13/1991')).toBeFalsy()
  })

  it('invalid year format pt-br', () => {
    expect(DateUtils.validate('30/12/1899')).toBeFalsy()
  })

  it('empty input format pt-br', () => {
    expect(DateUtils.validate('')).toBeFalsy()
  })

  it('valid date format iso', () => {
    expect(DateUtils.validate('1991-02-29', 'iso')).toBeTruthy()
  })

  it('invalid day format iso', () => {
    expect(DateUtils.validate('1991-02-30', 'iso')).toBeFalsy()
  })

  it('invalid month format iso', () => {
    expect(DateUtils.validate('1991-13-30', 'iso')).toBeFalsy()
  })

  it('invalid year format iso', () => {
    expect(DateUtils.validate('1899-12-30', 'iso')).toBeFalsy()
  })

  it('empty input format iso', () => {
    expect(DateUtils.validate('', 'iso')).toBeFalsy()
  })

  it('invalid format', () => {
    expect(() => DateUtils.validate('01/01/2021', 'other')).toThrow(Error)
  })
})

describe('Should format date string when', () => {
  it('valid date format iso', () => {
    const date = new Date(1991, 4, 1)
    expect(DateUtils.toString(date)).toBe('01/05/1991')
  })

  it('invalid undefined date', () => {
    expect(() => DateUtils.toString()).toThrow(TypeError)
  })

  it('invalid format', () => {
    const date = new Date(1991, 4, 1)
    expect(() => DateUtils.toString(date, 'other')).toThrow(Error)
  })

  it('valid date format pt-br', () => {
    const date = new Date(1991, 11, 23)
    expect(DateUtils.toString(date, 'iso')).toBe('1991-12-23')
  })
})

describe('Should format period when', () => {
  it('more than 1 year', () => {
    const response = DateUtils.formatPeriod(12, 'yearly')
    expect(response).toBe('12 anos')
  })

  it('more than one month', () => {
    const response = DateUtils.formatPeriod(11, 'monthly')
    expect(response).toBe('11 meses')
  })

  it('one month', () => {
    const response = DateUtils.formatPeriod(1, 'monthly')
    expect(response).toBe('1 mês')
  })

  it('one day', () => {
    const response = DateUtils.formatPeriod(1, 'daily')
    expect(response).toBe('1 dia')
  })

  it('more than one day', () => {
    const response = DateUtils.formatPeriod(7, 'daily')
    expect(response).toBe('7 dias')
  })
})

describe('Should return age when', () => {
  it('has a date', () => {
    expect(DateUtils.getAge(new Date(1995, 5, 29))).toEqual(27)
  })

  it('invalid undefined date', () => {
    expect(() => DateUtils.getAge()).toThrow(Error)
  })
})

describe('Should return years when', () => {
  it('a month is 12', () => {
    expect(DateUtils.convertMonthToYear('12')).toEqual(1)
  })
})

describe('Should format date object when', () => {
  it('valid date format pt-br', () => {
    const date = DateUtils.toDate('01/05/1991')
    expect(date.getDate()).toBe(1)
    expect(date.getMonth()).toBe(4)
    expect(date.getFullYear()).toBe(1991)
  })

  it('valid date format iso', () => {
    const date = DateUtils.toDate('1991-05-01', 'iso')
    expect(date.getDate()).toBe(1)
    expect(date.getMonth()).toBe(4)
    expect(date.getFullYear()).toBe(1991)
  })

  it('invalid undefined date', () => {
    expect(() => DateUtils.toDate()).toThrow(TypeError)
  })

  it('invalid format', () => {
    expect(() => DateUtils.toDate('01/01/2021', 'other')).toThrow(Error)
  })
})

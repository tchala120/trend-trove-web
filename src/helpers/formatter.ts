import numeral from 'numeral'

export const moneyFormat = (text: number | string, format = '0,0') =>
  numeral(text).format(format)

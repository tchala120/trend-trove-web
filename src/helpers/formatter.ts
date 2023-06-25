import numeral from 'numeral'

export const numberFormat = (text?: number | string, format = '0,0') =>
  numeral(text).format(format)

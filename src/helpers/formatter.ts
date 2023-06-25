import numeral from 'numeral'

export interface MoneyFormatOptions {
  prefix?: '$' | '฿'
  format?: string
}

export const numberFormat = (text?: number | string, format = '0,0') =>
  numeral(text).format(format)

export const moneyFormat = (
  text?: number | string,
  options?: MoneyFormatOptions
) => `${options?.prefix}${numberFormat(text, options?.format || '0,0.00')}`

export const currency = (value: number, isCurrency: boolean = false, toFixed: number = 0): string | number => {
  // Преобразование числа в строку в денежном формате
  const formatter = new Intl.NumberFormat('ru-RU')
  const formatterRub = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: toFixed,
  })

  if (value === undefined || value === null) {
    return 0
  }

  return isCurrency ? formatterRub.format(value) : formatter.format(value)
}

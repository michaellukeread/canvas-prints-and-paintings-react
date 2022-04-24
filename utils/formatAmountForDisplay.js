const formatAmountForDisplay = (amount, currency) => {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  })
  return numberFormat.format(amount)
}

export default formatAmountForDisplay

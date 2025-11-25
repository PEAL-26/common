export interface CurrencyOption {
  locales?: Intl.LocalesArgument;
  currency?: string;
}

export function currencyFormat(value?: number, options?: CurrencyOption) {
  const { locales = "pt-AO", currency = "AOA" } = options || {};
  let newValue = value;
  if (newValue === undefined || newValue === null) newValue = 0;

  const formatNumber = new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
  });

  return formatNumber.format(newValue);
}

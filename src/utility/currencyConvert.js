export const currencyConvert = (x) => {
  if (isNaN(x)) return x;

  if (x < 9999) {
    return x.toFixed(2);
  }

  if (x < 1000000) {
    return (x / 1000).toFixed(2) + 'K';
  }

  if (x < 1000000000) {
    return (x / 1000000).toFixed(2) + 'M';
  }

  if (x < 1000000000000) {
    return (x / 1000000000).toFixed(2) + 'B';
  }

  return '1T+';
};

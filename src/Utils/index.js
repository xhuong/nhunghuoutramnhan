export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-DE").format(price);
};

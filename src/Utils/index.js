export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-DE").format(price);
};

export const getCategoryNameByNameCredentical = (array, nameCredentical) => {
  const result = array.filter((category) => category.name === nameCredentical)[0];
  return result.categoryName;
};

export const getNameCredenticalByCategoryName = (array, categoryName) => {
  const result = array.filter((category) => category.categoryName === categoryName)[0];
  return result.name;
};

export const searchProductsByName = (array, keyword) => {
  const result = array.filter((product) => product.name.includes(keyword));
  return result;
};

export const getBasketLS = () => {
  const data = localStorage.getItem("basket");
  return data ? JSON.parse(data) : [];
};

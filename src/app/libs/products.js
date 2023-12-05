const { Axios } = require("./axios");

const fetchProduct = async (productsId) => {
  return await new Promise(async (resolve, reject) => {
    await Axios.get(`/products/product/${productsId}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const fetchProducts = async (input, type, min = 0) => {
  return await new Promise(async (resolve, reject) => {
    await Axios.get(
      `/products?min=${min}&max=${min + 8}${
        input.length > 0 ? `&name=${input}` : ""
      }${type != "الكل" ? `&type=${type}` : ""}`
    )
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export { fetchProduct, fetchProducts };

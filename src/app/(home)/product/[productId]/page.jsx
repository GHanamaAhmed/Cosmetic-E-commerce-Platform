import Product from "@/app/components/product/product";
import { fetchProduct } from "@/app/libs/products";
export default async function page({ params: { productId } }) {
  const product = await fetchProduct(productId).then((res) => res.data[0]);
  return <Product product={product} />;
}

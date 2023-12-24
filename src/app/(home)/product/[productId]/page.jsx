import Product from "@/app/components/product/product";
import Recommendation from "@/app/components/product/recommendation";
import { fetchProduct } from "@/app/libs/products";
import { fetchProducts } from "@/app/libs/products";
export default async function page({ params: { productId } }) {
  const product = await fetchProduct(productId).then(
    async (res) => res.data[0]
  );
  const initialData = await fetchProducts("", product?.type || "الكل").then(
    (res) => res.data
  );
  return (
    <div className="pt-[75px] ">
      <Product product={product} />
      <Recommendation
        type={product?.type}
        idProduct={product?._id}
        initialData={initialData}
      />
    </div>
  );
}

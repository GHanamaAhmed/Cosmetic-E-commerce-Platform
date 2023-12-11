import Image from "next/image";
import React, { useMemo } from "react";
import { useAppSelector,useAppDispatch } from "@/app/hooks/reduxHooks";
import Card from "./card";
import { useRouter } from "@/app/libs/router-events/patch-router/router";
import { changeIsOrder } from "@/app/redux/basketReducer";
export default function Basket() {
  const { products } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const some = useMemo(() => {
    return products.reduce((some, e) => some + e?.price * e?.quntity, 0);
  }, [products]);
  const disable = useMemo(() => {
    const c = products.every(
      (e) =>
        e?.color &&
        e?.size &&
        e?.color != "الكل" &&
        e?.size != "الكل" &&
        e?.quntity > 0
    );
    return c ? false : true;
  }, [products]);

  return (
    <div className="w-full gap-2">
      {products?.map((e, i) => (
        <Card product={e} index={i} key={i} />
      ))}
      <div className="w-full flex items-center flex-col gap-1">
        <div className="w-full flex justify-around">
          <p>المجموع:</p>
          <p>{some} دج</p>
        </div>
        <button
          onClick={() => {
            dispatch(changeIsOrder(true));
            router.push("/checkout");
          }}
          className="border border-green-500 py-2 w-11/12"
        >
          شراء
        </button>
      </div>
    </div>
  );
}

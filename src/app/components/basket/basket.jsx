import React, { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/app/hooks/reduxHooks";
import Card from "./card";
import { useRouter } from "@/app/libs/router-events/patch-router/router";
import { changeIsOrder } from "@/app/redux/basketReducer";
import { toasty } from "../toasty/toast";
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
    <div className="w-full relative flex-1 max-h-full flex flex-col justify-between pb-3 gap-2">
      <div className="flex flex-col max-h-full flex-1 mb-[80px] overflow-auto">
        {products?.map((e, i) => (
          <Card product={e} index={i} key={i} />
        ))}
      </div>
      <div className="w-full absolute bottom-0 -translate-y-3/4 bg-white flex items-center flex-col gap-1">
        <div className="w-full flex justify-around">
          <p>المجموع:</p>
          <p>{some} دج</p>
        </div>
        <button
          onClick={() => {
            if (products?.length == 0 || some == 0)
              return toasty("السلة فارغة", {
                toastId: "addProduct",
                autoClose: 5000,
                type: "warning",
              });
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

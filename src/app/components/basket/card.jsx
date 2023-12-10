import { remveByIdFromBasket, updateBasket } from "@/app/redux/basketReducer";
import Image from "next/image";
import React from "react";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import { toasty } from "@/app/components/toasty/toast";
export default function Card({ product,index }) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full flex py-3 px-3 border-b justify-between">
      <div className="flex">
        <Image src={product?.thumbanil} width={130} height={130} alt="img" />
        <div className="grid grid-cols-2 px-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm">{product?.name}</p>
            <button
              style={{ backgroundColor: product?.color }}
              className={`rounded-full shadow-[inset_-0.5px_0.5px_3px_0px_#1a202c]  z-50 w-6 h-6`}
            ></button>
            <p className="text-sm">{product?.size}</p>
            <div className="flex border w-fit">
              <button
                onClick={() => {
                  if (
                    product?.color &&
                    product?.size !== null &&
                    product?.size !== undefined
                  ) {
                    product?.maxQuntity - product?.quntity > 0 &&
                      dispatch(
                        updateBasket({
                          index,
                          product: {
                            ...product,
                            quntity: product?.quntity + 1,
                          },
                        })
                      );
                  } else {
                    toasty("اختر اللون و الحجم اولا", {
                      position: "top-left",
                      toastId: "selectColor",
                      autoClose: 5000,
                      type: "warning",
                    });
                  }
                }}
                className="px-2 py-0.5 lg:px-3 lg:py-2 border-l  text-sm "
              >
                +
              </button>
              <div className="px-2 text-sm py-0.5 lg:px-3 lg:py-2">
                {product?.quntity}
              </div>
              <button
                onClick={() => {
                  if (product?.color) {
                    product?.quntity > 1 &&
                      dispatch(
                        updateBasket({
                          index,
                          product: {
                            ...product,
                            quntity: !product?.quntity
                              ? 0
                              : product?.quntity - 1,
                          },
                        })
                      );
                  } else {
                    toasty("اختر اللون اولا", {
                      position: "top-left",
                      toastId: "selectColor",
                      autoClose: 5000,
                      type: "warning",
                    });
                  }
                }}
                className="px-2 py-0.5 lg:px-3 lg:py-2 border-r text-sm "
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between items-end">
        <button  onClick={() => dispatch(remveByIdFromBasket(index))} className="h-1 w-2 bg-red-600"></button>
        <p className="text-sm">{product?.quntity*product?.price}Da</p>
      </div>
    </div>
  );
}

import React from "react";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";

export default function Cart() {
  const text = "Comfy Walking Shoes"

  return <>
    <article className="bg-white round-2xl shadow-2xl p-8 absolute right-8 top-32 lg:w-96 lg:left-auto lg:top-20"
    style={{
      zIndex: 20,
      width: "300px",
    }}>
      <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>

      <div className="flex items-center justify-between">
        <img src={thumbnail} alt=""className="rounded-lg w-14"/>
        <ul className="mx-2">
          <li className="text-slate-600 text-small">{`${text.substring(0, 21)}`}</li>
          <li>$125.00 x 3 <span className="font-bold text-slate-900">$375.00</span></li>
        </ul>

        <button>
          <img src={iconDelete} alt=""/>
        </button>
      </div>

      <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">Checkout</button>
    </article>
  </>;
}

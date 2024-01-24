import React from "react";
export function CartItem(props) {
  // const { id = 1, title = "no title", description = "no desc" } = props.data;
  return (
    <div className="cart-item flex items-start gap-4">
      <input type="checkbox" className="checkbox-sm" />
      <div className="cart-image w-16 md:w-24 h-16 md:h-24 bg-gray-500 rounded-xl" />
      <div className="cart-descript">
        <p className="font-bold">Title</p>
        <p className="opacity-70 text-sm">Description</p>
        <div className="border flex rounded-lg mt-4">
          <button className="px-2">-</button>
          <input type="number" className="w-12 text-center text-sm" />
          <button className="px-2">+</button>
        </div>
      </div>
    </div>
  );
}

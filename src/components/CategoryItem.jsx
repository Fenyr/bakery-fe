import React from "react";
export default function CategoryItem({}) {
  return (
    <div className="flex flex-col items-center hover:scale-105 duration-200">
      <div className="w-16 h-16 bg-slate-500 rounded-xl shadow-lg " />
      <p className="text-xs mt-1">Category</p>
    </div>
  );
}

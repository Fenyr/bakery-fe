import { NavBar } from "../components/NavBar";
import ProductItem from "../components/ProductItem";

export default function HomePage() {
  return (
    <>
      <p className="text-end font-bold mb-4 p-2">Bakery Shop</p>
      <div id="head" className="my-2">
        <p className="text-xl font-semibold">Welcome to Our Shop</p>
        <p className="opacity-60">Subtitle</p>
      </div>
      <div id="Category" className="my-4">
        <p className="text-lg font-semibold">Category</p>
        <div className="flex my-2 gap-x-3">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
      <div id="product" className="my-4">
        <p className="text-lg font-semibold">Product</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-6 my-2 mr-2">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </>
  );
}

function CategoryItem({}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-slate-500 rounded-xl shadow-lg hover:scale-105 duration-200" />
      <p className="text-xs mt-1">Category</p>
    </div>
  );
}

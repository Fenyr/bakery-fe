import { CartItem } from "../components/CartItem";

export default function CartPage() {
  return (
    <>
      <div className="pt-8 relative h-full">
        <p className="text-xl font-semibold mx-4">Cart Item</p>
        <div id="cart" className="p-4 pb-8 rounded-lg shadow-xl my-2  mx-4">
          <div className="cart-header flex gap-x-2 mb-4 py-2 border-b-2">
            <input type="checkbox" className="checkbox-xs" />
            <p>Pilih Semua</p>
          </div>
          <div className="grid gap-y-4">
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="absolute bottom-0 p-2 flex w-full justify-between">
          <div className="total">
            <p>Total </p>
            <p className="text-lg text-orange-400 font-bold">Rp.100.000</p>
          </div>
          <div className="btn bg-orange-300 text-white font-bold">Checkout</div>
        </div>
      </div>
    </>
  );
}

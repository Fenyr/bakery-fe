import { FaSortAmountDown } from "react-icons/fa";
import OrderItem from "../components/OrderItem";
export default function OrderPage() {
  return (
    <>
      <div className="pt-8 relative h-full mx-4">
        <p className="text-xl font-semibold">Ordered Item</p>
        <div className="flex justify-between items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari Order"
            className="rounded-xl border px-4 py-2 my-2 text-sm w-32"
          />
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-inherit border-none rounded-lg m-1"
            >
              Sort <FaSortAmountDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24"
            >
              <li>
                <a>Date</a>
              </li>
              <li>
                <a>Price</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-y-4">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </>
  );
}

export default function ProductItem(props) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="bg-slate-200 min-h-28"></figure>
      <div className="card-body">
        <h2 className="card-title">Title</h2>
        <h2 className="card-price">Rp.10.000</h2>
        <div className="card-actions justify-between items-center">
          <p className="text-xs">Available</p>
          <button className="btn btn-success text-white btn-xs rounded-lg">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

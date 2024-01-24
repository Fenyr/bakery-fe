export default function ProductItem(props) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="bg-slate-200 min-h-28"></figure>
      <div className="card-body">
        <h2 className="card-title">Title</h2>
        <p>lorem</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success text-white btn-xs">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

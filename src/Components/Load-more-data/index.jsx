import { useEffect, useState } from "react";
import "./style.css";
export default function LoadMoreData(params) {
  const [loading, setLoading] = useState(false);
  const [myProducts, setMyProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const url = `https://dummyjson.com/products?limit=20&skip=${
        count == 0 ? 0 : count * 20
      }`;
      const res = await fetch(url);
      const data = await res.json();

      if (data && data.products && data.products.length) {
        setMyProducts(data.products);
        setLoading(false);
        console.log(data.products);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data Please wait.</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {myProducts && myProducts.length
          ? myProducts.map((product) => (
              <div key={product.id} className="product">
                <img src={product.thumbnail} alt={product.title} />
                <div>{product.title}</div>
              </div>
            ))
          : null}
      </div>
      <div className="btn-container">
        {count !== 4 ? (
          <button onClick={() => setCount(count + 1)}>
            Load more Products
          </button>
        ) : (
          <button>You reach the end of the list</button>
        )}
      </div>
    </div>
  );
}

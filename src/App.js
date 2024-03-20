import Header from "./components/Header";
import "./App.css";
import Page from "./components/Page";
import Products from "./components/Products";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const getProducts = async (token) => {
  try {
    const response = await axios.get("http://20.244.56.144/products/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const AllProducts = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts(token);
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <header className="App-header">
        <h1>AMMAZON</h1>
      </header>
      <AllProducts token={token} />
    </div>
  );
}

export default App;

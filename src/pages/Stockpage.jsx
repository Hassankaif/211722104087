import React from 'react'
import { useEffect, useState } from "react";
import { getAuthorizationtoken, getStocksdata } from "../Service/ApiData";
const Stockpage = () => {


  const [token, setToken] = useState("");
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTokenAndThenStocksData() {
      setLoading(true);
      setError("");
      try {
        const tok = await getAuthorizationtoken();
        setToken(tok);
        const stocksList = await getStocksdata(tok);
        setStocks(stocksList);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
      setLoading(false);
    }
    fetchTokenAndThenStocksData();
  }, []);

  return (
    <div>
      <h1>Token:</h1>
      <pre>{token}</pre>
      <h2>Stocks:</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {stocks.map((stock) => (
            <li key={stock.symbol}>
              {stock.companyName} (<b>{stock.symbol}</b>)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Stockpage


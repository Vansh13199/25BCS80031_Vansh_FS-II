import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [rates, setRates] = useState({});

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setCurrencies(Object.keys(data.rates));
      });
  }, []);

  useEffect(() => {
    convert();
  }, [amount, from, to, rates]);

  const convert = () => {
    if (!rates[from] || !rates[to]) return;

    const usd = amount / rates[from];
    const converted = usd * rates[to];

    setResult(converted.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="row">
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>

        <span>to</span>

        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
      </div>

      <h2>
        {amount} {from} = {result} {to}
      </h2>
    </div>
  );
}

export default App;
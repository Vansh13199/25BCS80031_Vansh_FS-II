import 

dconst useCurrency = () => {
  const [currency, setCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    // Simulate fetching exchange rates
    const fetchExchangeRates = async () => {
      // Replace this with your actual API call
      const rates = await fetch('/api/exchange-rates').then(res => res.json());
      setExchangeRates(rates);
    };

    fetchExchangeRates();
  }, []);

  return { currency, setCurrency, exchangeRates };
};

export default useCurrency;
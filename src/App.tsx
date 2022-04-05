import { useState, useEffect } from 'react';
import './App.css';
import CoinTable from './components/CoinTable';
import type { Coin } from './type';

const App: React.FunctionComponent = () => {
  const [responseData, setData] = useState<Array<Coin> | undefined>(undefined);

  const fetchData = async () => {
    const result = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=5&page=1&sparkline=false');
    const data: Array<Coin> = await result.json();

    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(responseData);

  return (
    <div className="App">
      <h1>Crypto Prices</h1>
      { responseData ? (
        <CoinTable coins={responseData} />
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;

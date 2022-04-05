import type { Coin } from "../type";

interface Props {
  coin: Coin;
}

const CoinRow: React.FunctionComponent<Props> = ({ coin }) => {
  console.log(coin);
  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td>{coin.name + " " + coin.symbol}</td>
      <td>{"£" + coin.current_price}</td>
      <td>{"%" + coin.price_change_percentage_24h}</td>
      <td>{"£" + coin.total_volume}</td>
      <td>{"£" + coin.market_cap}</td>
    </tr>
  )
}

export default CoinRow;
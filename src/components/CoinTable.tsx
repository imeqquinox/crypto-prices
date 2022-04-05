import CoinRow from "./CoinRow";
import type { Coin } from "../type";

interface Props {
  coins: Array<Coin>;
}

const CoinTable: React.FunctionComponent<Props> = ({ coins }) => {
  
  return (
    <table>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Coin</th>
          <th>Price</th>
          <th>24H Change</th>
          <th>24H Volume</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <CoinRow coin={coin} />
        ))}
      </tbody>
    </table>
  )
}

export default CoinTable;
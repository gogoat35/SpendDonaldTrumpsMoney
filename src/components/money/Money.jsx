import { useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
export default function Money() {
  const money = useSelector((state) => state.balance);
  const total = useSelector((state) => state.total);

  return (
    <div className="money">
      <div className="balance">
        <NumericFormat
          displayType="text"
          thousandSeparator=","
          value={money - total}
          renderText={(value) => <h1>${value}</h1>}
        />
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  sellCard,
  reduce,
  increase,
} from "../../redux/slice/cartBagSlice";

export default function Main() {
  const items = useSelector((state) => state.items);
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  const money = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const sell = (product) => {
    dispatch(sellCard(product));
    dispatch(increase());
  };
  const buy = (product) => {
    dispatch(addCart(product));
    dispatch(reduce());
  };

  const amountFinder = (product) => {
    let cartClone = [...cart];
    let finder = cartClone.find((item) => item.id == product.id);

    if (finder) {
      return finder.amount;
    } else {
      0;
    }
  };
  // let findex = cartClone.findIndex(
  //   (item) => item === itemClone.filter((product) => product.id === item.id)
  // );
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="gridContainer">
        {items.map((product) => (
          <div className="gridItem" key={product.id}>
            <img src={product.img} alt="" />
            <h1>{product.name}</h1>
            <NumericFormat
              displayType="text"
              thousandSeparator=","
              value={product.price}
              renderText={(value) => <h1>${value}</h1>}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="sell"
                disabled={amountFinder(product) >= 1 ? false : true}
                onClick={() => sell(product)}
              >
                Sell
              </button>
              <input
                style={{
                  width: "70px",
                  height: "20px",
                  border: "none",
                  textAlign: "center",
                  padding: "15px",
                  outline: "none",
                  fontSize: "18px",
                }}
                type="number"
                readOnly
                value={amountFinder(product) >= 1 ? amountFinder(product) : 0}
              ></input>
              <button
                className="buy"
                disabled={total + product.price > money}
                onClick={() => buy(product)}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="cartContainer" hidden={cart.length <= 0}>
        <h1 style={{ padding: "15px 15px 25px" }}>Your Receipt</h1>
        {cart.map((item) => (
          <div className="items">
            <div style={{ textAlign: "left", textOverflow: "ellipsis" }}>
              {item.name}
            </div>
            <div style={{ textAlign: "left" }}>X{item.amount}</div>
            <NumericFormat
              displayType="text"
              thousandSeparator=","
              value={item.amount * item.price}
              renderText={(value) => (
                <div style={{ textAlign: "right", color: "#24c486" }}>
                  ${value}
                </div>
              )}
            />
          </div>
        ))}
        <div className="total">
          <span>TOTAL</span>

          <NumericFormat
            displayType="text"
            thousandSeparator=","
            value={cart.reduce((acc, items) => {
              return (
                acc +
                items.amount *
                  cart.find((product) => product.id === items.id).price
              );
            }, 0)}
            renderText={(value) => (
              <div style={{ color: "#24c486" }}>${value}</div>
            )}
          />
        </div>
      </div>
    </>
  );
}

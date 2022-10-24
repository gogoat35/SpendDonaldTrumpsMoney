import React from "react";
import { useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="cartContainer" hidden={cart.length <= 0}>
        <div>
          <h1 style={{ textAlign: "center" }}>Your Receipt</h1>
          {cart.map((item) => (
            <div key={item.id}>
              <h4>
                {item.name} X{item.amount}
              </h4>
              <NumericFormat
                displayType="text"
                thousandSeparator=","
                value={item.amount * item.price}
                renderText={(value) => (
                  <label style={{ textAlign: "right" }}>${value}</label>
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import React from "react";
import Builder from "./Builder/Builder";
import Button from "../UI/Button/Button";
import "./Controls.css";

const products = [
  { key: 1, title: "محصول 1", type: "product1" },
  { key: 2, title: "محصول 2", type: "product2" },
  { key: 3, title: "محصول 3", type: "product3" },
  { key: 4, title: "محصول 4", type: "product4" },
];
const Controls = (props) => {
  return (
    <div className="controls">
      <div className="price">
        <p>هزینه کل : {props.totalPrice}</p>
      </div>
      {products.map((item) => {
        return (
          <Builder
            key={item.key}
            title={item.title}
            add={() => props.add(item.type)}
            remove={() => props.remove(item.type)}
          />
        );
      })}
      {/* <button className="order-btn" onClick={props.purchasedHandler}>
        لیست خرید
      </button> */}
      <Button btnType="purchased-list" click={props.purchasedHandler}>
        لیست خرید
      </Button>
    </div>
  );
};

export default Controls;

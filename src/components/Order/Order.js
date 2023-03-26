import React from "react";
import Button from "../UI/Button/Button";
import Wrapper from "../../hoc/Wrapper";

const Order = (props) => {
  const summery = Object.keys(props.products).map((item) => {
    return (
      <li key={item}>
        {item}:{props.products[item]}
      </li>
    );
  });
  return (
    <Wrapper>
      <h3>لیست سفارشات</h3>
      <ul>{summery}</ul>
      <p>قیمت کل :{props.totalPrice}</p>
      <p>آیا مایل به ادامه خرید هستید؟</p>
      <Button btnType="success" click={props.continue}>
        بله
      </Button>
      <Button btnType="danger" click={props.cancel}>
        خیر
      </Button>
    </Wrapper>
  );
};

export default Order;

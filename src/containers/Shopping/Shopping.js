import React from "react";

import { Navigate } from "react-router-dom";

import axios from "../../axios-order";

import Wrapper from "../../hoc/Wrapper";

import Controls from "../../components/Controls/Controls";

import Order from "../../components/Order/Order";

import Modal from "../../components/UI/Modal/Modal";

import Loader from "../../components/UI/Loader/Loader";

const prices = {
  product1: 99,
  product2: 89,
  product3: 79,
  product4: 69,
};
class Shopping extends React.Component {
  state = {
    products: null,
    totalPrice: 0,
    purchased: false,
    loading: false,
    navigate: false,
  };
  componentDidMount() {
    axios
      .get(
        "https://react-redux-main-9bf5c-default-rtdb.firebaseio.com/products.json"
      )
      .then((response) => {
        this.setState({ products: response.data });
      });
  }
  addProductHandler = (type) => {
    //count
    const prevCount = this.state.products[type];
    const updatedCount = prevCount + 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;

    //price
    const prevPrice = this.state.totalPrice;
    const priceAdd = prices[type];
    const newPrice = prevPrice + priceAdd;
    //setstate
    this.setState({ totalPrice: newPrice, products: updatedProducts });
    console.log("add");
  };
  removeProductHandler = (type) => {
    //count
    const prevCount = this.state.products[type];
    const updatedCount = prevCount - 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;

    //price
    const prevPrice = this.state.totalPrice;
    const priceRemove = prices[type];
    const newPrice = prevPrice - priceRemove;
    //setstate
    this.setState({ totalPrice: newPrice, products: updatedProducts });
    console.log("remove");
  };
  purchasedHandler = () => {
    this.setState({ purchased: true });
  };
  modalCloseHandler = () => {
    this.setState({ purchased: false });
  };
  continueHandler = () => {
    this.setState({ loading: true, navigate: false });
    const order = {
      products: this.state.products,
      totalprice: this.state.totalPrice,
      customer: {
        name: "Mostafa",
        family: "Mehrabi",
        email: "mostafamehrabi639@gmail.com",
      },
    };
    axios
      .post("/order.json", order)
      .then((response) => {
        this.setState({ loading: false, purchased: false, navigate: true });
        console.log(response);
      })
      .catch((error) => {
        this.setState({ loading: false, purchased: false, navigate: false });
        console.log(error);
      });
  };
  render() {
    let order = null;
    let navigate = null;
    let controls = <Loader />;
    if (this.state.navigate) {
      navigate = <Navigate to="/checkout" />;
    }
    if (this.state.loading) {
      order = <Loader />;
    }
    if (this.state.products) {
      controls = (
        <Controls
          add={this.addProductHandler}
          remove={this.removeProductHandler}
          purchasedHandler={this.purchasedHandler}
          totalPrice={this.state.totalPrice}
        />
      );
      order = (
        <Order
          products={this.state.products}
          totalPrice={this.state.totalPrice}
          continue={this.continueHandler}
          cancel={this.modalCloseHandler}
        />
      );
    }
    return (
      <Wrapper>
        <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
          {order}
        </Modal>
        {controls}
        {navigate}
      </Wrapper>
    );
  }
}
export default Shopping;

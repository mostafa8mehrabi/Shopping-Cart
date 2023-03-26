import React from "react";

import axios from "../../axios-order";

import Input from "../../components/Input/Input";

import Button from "../../components/UI/Button/Button";

import "./Account.css";

class Account extends React.Component {
  state = {
    form: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "نام کاربری...",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        used: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: " ایمیل...",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        used: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "پسورد...",
        },
        value: "",

        validation: {
          required: true,
        },
        valid: false,
        used: false,
      },
    },
  };
  changeInputHandler = (event, id) => {
    const currentForm = { ...this.state.form };

    const currentElement = { ...currentForm[id] };

    currentElement.value = event.target.value;

    currentElement.valid = this.checkValidation(
      currentElement.value,
      currentElement.validation
    );
    currentElement.used = true;

    currentForm[id] = currentElement;
    this.setState({ form: currentForm });
  };
  checkValidation = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    return isValid;
  };
  submitHandler = (event) => {
    event.preventDefault();

    const formData = {};

    for (let item in this.state.form) {
      formData[item] = this.state.form[item].value;
    }
    axios
      .post("/account.json", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  render() {
    const elementArray = [];
    for (let item in this.state.form) {
      elementArray.push({
        id: item,
        config: this.state.form[item],
      });
    }
    return (
      <div className="account">
        <h2>حساب کاربری</h2>
        <form onSubmit={this.submitHandler}>
          {elementArray.map((item) => {
            return (
              <Input
                key={item.id}
                invalid={!item.config.valid}
                elementType={item.config.elementType}
                elementConfig={item.config.elementConfig}
                value={item.config.value}
                used={item.config.used}
                change={(event) => this.changeInputHandler(event, item.id)}
              />
            );
          })}

          <Button btnType="submit">ورود</Button>
        </form>
      </div>
    );
  }
}

export default Account;

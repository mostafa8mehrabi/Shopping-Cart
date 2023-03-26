import React from "react";

import Wrapper from "../../../hoc/Wrapper";

import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

const Modal = (props) => {
  return (
    <Wrapper>
      <Backdrop show={props.show} modalClose={props.modalClose} />
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateX(+100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  );
};

export default Modal;

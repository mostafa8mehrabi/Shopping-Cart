import React from "react";
import Button from "../../UI/Button/Button";
import "./Builder.css";
const Builder = (props) => {
  return (
    <div className="builder">
      <div>{props.title}</div>
      <Button btnType="Builder-btn" click={props.add}>
        افزایش
      </Button>
      <Button btnType="Builder-btn" click={props.remove}>
        کاهش
      </Button>
      {/* <button onClick={props.add}>افزایش</button> */}
      {/* <button onClick={props.remove}>کاهش</button> */}
    </div>
  );
};

export default Builder;

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    // <button type="button" {...props} style={{ float: "right" }} className="btn btn-success">
    //   {props.children}
    // </button>
    <button type="submit" {...props}>
      Search
    </button>
  );
}

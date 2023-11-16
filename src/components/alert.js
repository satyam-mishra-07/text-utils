import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div className= {`alert alert-${props.alert.Type}`} role="alert">
      <strong>{capitalize(props.alert.Type)}</strong>: {props.alert.msg}
    </div>
  );
}
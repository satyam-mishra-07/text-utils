import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Textform(props) {

  const [text, setText] = useState("");
  // text = "new text" -----> Wrong Way
  // setText("New Text"); -------> Correct Way

  const handleUpClicked = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLwClicked = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCapitalClicked = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    setText(arr.join(" "));
    props.showAlert("Text Capitalized!", "success");
  };
  
  const handleClearClicked = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  }

  const handleReverse = () => {
    const newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text Reversed!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!", "success");
  }

  function handleOnChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container my-3" data-bs-theme={props.mode} style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="container" data-bs-theme={props.mode}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="exampleFormControlTextarea1"
              rows="8"
              style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}
            ></textarea>
          </div>
          <span className="mx-2">
            <button className="btn btn-primary" onClick={handleUpClicked}>
              Convert to Uppercase
            </button>
          </span>
          <span className="mx-2">
            <button className="btn btn-primary" onClick={handleLwClicked}>
              Convert to Lowercase
            </button>
          </span>
          <span className="mx-2">
            <button className="btn btn-primary" onClick={handleCapitalClicked}>
              Capitalise
            </button>
          </span>
          <span className="mx-2">
            <button className="btn btn-primary" onClick={handleClearClicked}>
              Clear
            </button>
          </span>
          <span className="mx-2">
            <button onClick={handleCopy} className="btn btn-primary">
              Copy Text
            </button>
          </span>
          <span className="mx-2">
            <button onClick={handleExtraSpaces} className="btn btn-primary">
              Remove Extra Spaces
            </button>
          </span>
          <span className="mx-2">
            <button onClick={handleReverse} className="btn btn-primary">
              Reverse
            </button>
          </span>
        </div>
        <div className="container my-3" data-bs-theme={props.mode}>
          <h1>Your Text Summary</h1>
          <p>
          {text.trim().split(/\s+/).filter(word => word !== '').length} Words and {text.length} Characters
          </p>
          <p>
            It should take {0.008 * text.trim().split(/\s+/).filter(word => word !== '').length} minutes to read this
            text.
          </p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
};

Textform.defaultProps = {
  heading: "TextUtils",
};

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text); //For understanding better way with text
    // console.log("Uppercase was clicked");  //For understanding better way
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text is now capitalized...","success");
  };

  const handleLowClick = () => {
    // console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text is now Lowercase...","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your text is clear...","danger");
  };

  const handleRepeatClick = () => {
    let newText = text.repeat(2);
    setText(newText);
    props.showAlert("Your text is now Repeated...","warning");
  };

  const handleOnChange = (event) => {
    // console.log("On change"); //For understanding better way
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text = "new text"; //Wrong way to change the state
  // setText = "New text"; //Correct way to change the state

  return (
    <>
    <div className="container"  style={{
              color:props.mode === 'light'?'black':'white'
            }}>
      <div className="container">
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#09090a",
              color:props.mode === 'light'?'black':'white'
            }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
        disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-2"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-warning mx-1" onClick={handleRepeatClick}>
          Repeat Text
        </button>
        <button disabled={text.length === 0} className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Your test summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview..."}</p>
      </div>
      </div>
    </>
  );
}

import React from "react";

export default function About(props) {
  // const handleMode = () => {

  // const [myStyle, setMyStyle] = useState({
  //       color: "white",
  //       backgroundColor: "black",
  //     })
  //     const [btnText, setBtnText] = useState("Enable Light Mode")

  //     const toggleStyle = () => {
  //       if(myStyle.color === "white"){
  //           setMyStyle({
  //               color: "black",
  //               backgroundColor: "white",

  //           })
  //           setBtnText("Enable Dark Mode")
  //       }
  //       else{
  //           setMyStyle({
  //               color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //             })
  //             setBtnText("Enable Light Mode")
  //       }
  //     }
  // }
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
          backgroundColor: props.mode === "light" ? "white" : "#09090a",
        }}
      >
        {/* <div className="Container" style={myStyle}> */}
        <div className="Container">
          <h1 className="my-3">About us</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              {/* <div className="accordion-item" style={myStyle}> */}
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  // style={myStyle}
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                    backgroundColor:
                      props.mode === "light" ? "white" : "#212529",
                  }}
                >
                  <strong>Analyze to text</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                    backgroundColor:
                      props.mode === "light" ? "white" : "#09090a",
                  }}
                >
                  TextUtils gives you a way to analyze your text quickly and
                  efficiently. Be it word count, character count
                </div>
              </div>
            </div>
            <div className="accordion-item">
              {/* <div className="accordion-item" style={myStyle}> */}
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                    backgroundColor:
                      props.mode === "light" ? "white" : "#212529",
                  }}
                  // style={myStyle}
                >
                  <strong>Free to use</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                    backgroundColor:
                      props.mode === "light" ? "white" : "#09090a",
                  }}
                >
                  TextUtils is a free character counter tool that provides
                  instant character count & word count statistics for a given
                  text. TextUtils reports the number of words and character.
                  Thus it is suitable for writing text with word/character
                  limit.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              {/* <div className="accordion-item" style={myStyle}> */}
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  // style={myStyle}
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                    backgroundColor:
                      props.mode === "light" ? "white" : "#212529",
                  }}
                >
                  <strong>Browser Compatible</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
                
              >
                <div
                  className="accordion-body"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                    backgroundColor:
                      props.mode === "light" ? "white" : "#09090a",
                  }}
                >
                  This word counter software works in any web browsers such as
                  Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                  count character in facebook, blog, books, excel document, pdf
                  document, essays, and etc.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container" style={myStyle}>
<button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
      </div>  */}
      </div>
    </>
  );
}

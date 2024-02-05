import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#09090a";
      showAlert("Dark mode is enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled","success");
    }
  };

  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
        <Router>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar /> */}

      <Alert alert={alert} />

      <div className="container my-3">
      <Routes>

<Route exact path="/about" element={<About mode={mode} />} />
<Route exact path="/textform" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />

      
        </Routes>
      </div>
        </Router>
    </>
  );
}

export default App;

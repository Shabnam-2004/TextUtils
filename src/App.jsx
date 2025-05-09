import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { AlertProvider } from "./context/AlertContext";

function App({}) {
  const [msg, setMsg] = useState(null);
  const showAlert = (mesaage) => {
    setMsg(mesaage);
    setTimeout(() => {
      setMsg(null);
    }, 1500);
  };

  return (
    <AlertProvider>
      <ThemeProvider>
        <div className=" box-border h-screen dark:bg-[#060815]  bg-white ">
          <Router>
            <Navbar title="Text Utils" about="About" />
            <Alert msg={msg} />
            <Routes>
              <Route path="/" element={<TextForm showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </AlertProvider>
  );
}

export default App;

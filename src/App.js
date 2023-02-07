import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [modeType, setModeType] = useState("Enable");
  const [alert, setAlert] = useState(null);

  const setAlertMessageAndType = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeType('Disable');
      document.body.style.backgroundColor = '#042743';
      setAlertMessageAndType("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      setModeType('Enable');
      document.body.style.backgroundColor = 'white';
      setAlertMessageAndType("Dark mode has been disabled", "success");
    }
  }
  return (
    <>
      <Router>
        {/*  <Navbar/> */}
        <Navbar title="TextUtil" aboutText="About TextUtil" mode={mode} toggleMode={toggleMode} modeType={modeType} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm setAlertMessageAndType={setAlertMessageAndType} heading="Enter the Text To Analyze" mode={mode} />} />
            {/* <Route path="*" element={<NotF} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 5000);

  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#192a3c'
      showAlert("Dark mode is enable","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Dark mode is disable","success");
    }
    
  }

  const toggleBgColor = (colorName)=>{
    if(mode!=='dark'){
      if(colorName!==''){
        document.body.style.backgroundColor=colorName;
      }
    }else{
      showAlert("Please disable dark mode for light themes","warning");
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="FirstApp" mode={mode} toggleMode={toggleMode} toggleBgColor={toggleBgColor} />
      <Alert alert={alert} />
      <div className="Container">
          <Routes>
          <Route  path="/" element={<TextForm heading="Enter the text for analized" mode={mode} showAlert={showAlert}  /> } />
             
          <Route path="/about" element={<About mode={mode} />} />
          </Routes>
      
      </div>
      
    </BrowserRouter>
    </>
  );
}

export default App;

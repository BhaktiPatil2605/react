// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter, Route, Routes } from "react-router-dom";
// let name="Bhakti";
function App() {
  const [mode, setMode] = useState('light');
  // const [colorchangemode, setColorMode]=useState('info');
  const [alert, setAlert] = useState(null)

  // USE FO CHANGNG COLOR FUNCTIONS
  // const removeclass=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');

  // }
  // const changeMode=(cls)=>{         USE OF CHNAGING COLOR FUNCTION
    // removeclass();
    // document.body.classList.add('bg-'+cls);
    const changeMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#041c40';
      showAlert('Dark mode has been Enable','success');
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been Enable','success');

    }
  }

  // const changeMode = (modeType, color) => {
  //   console.log(modeType);
  //   console.log(color);
  //   setMode(color);
  //   switch (modeType) {
  //     case 'color':
  //       // Change background colors based on color buttons
  //       // Implement the color changing logic here
  //       switch (color) {
  //         case 'info':
  //           document.body.style.backgroundColor = '#4896e6'; // Info color
  //           showAlert('Info mode has been Enable','success');
  //           document.title='TEXTO - Info Mode';
  //           break;
  //         case 'danger':
  //           document.body.style.backgroundColor = 'red'; // Danger color
  //           showAlert('Danger mode has been Enable','success');
  //           document.title='TEXTO - Danger Mode';
  //           break;
  //         case 'success':
  //           document.body.style.backgroundColor = 'lightgreen'; // Success color
  //           showAlert('Success mode has been Enable','success');
  //           document.title='TEXTO - Success Mode';
  //           break;
  //         case 'warning':
  //           document.body.style.backgroundColor = 'yellow'; // Warning color
  //           showAlert('Warning mode has been Enable','success');
  //           document.title='TEXTO - Warning Mode';
  //           break;
  //         case 'dark':
  //           document.body.style.backgroundColor = '#041c40'; // Dark color
  //           showAlert('Dark mode has been Enable','success');
  //           document.title='TEXTO - Dark Mode';
  //           break;
  //         case 'light':
  //           document.body.style.backgroundColor = 'white'; // Light color
  //           showAlert('Light mode has been Enable','success');
  //           document.title='TEXTO - Light Mode';
  //           break;
  //         default:
  //           break;
  //       }
  //       // setMode('')
  //       break;
  //       // setMode(color);
  //       // ###################### for toggle button ########################
  //     // case 'toggle':
  //     //   // setMode('light'); // Set the new mode
  //     //   console.log(color);
  //     //   // setMode(color);
  //     //   // console.log(mode);
  //     //   const newMode = color === 'light' ? 'dark' : 'light'; // Toggle the mode
  //     //   setMode(newMode); // Set the new mode
  //     //   if (newMode === 'dark') {
  //     //     document.body.style.backgroundColor = '#041c40'; // Dark background color
  //     //   } else {
  //     //     document.body.style.backgroundColor = 'white'; // Light background color
  //     //   }
  //     //   break;
  //     default:
  //       break;
  //   }
  // };



const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type,
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

return (
  <>
   <BrowserRouter>
    <Navbar title="TEXTO" aboutText="About" mode={mode} changeMode={changeMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    {/* users/ --> Component 1
    users/home/ --> Component 2 */
    //  we should write exact so  that route can go to that right path in which our component is save or else if we doesnt write exact it will show the result for similar components path like i want to acces component2 which is in user/home folder but if we dont write exact while accesing the component then it will show the result of component1 which in users folder as it find the same relative path
    } 
    <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route
              exact path="/"
              element={
                <Form heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />
              }
            ></Route>
          </Routes> 
    </div>
     
          
    </BrowserRouter>
  </>
); 
}

export default App;

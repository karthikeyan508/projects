import React, { useState } from "react";

import './App.css';
import Login from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from './Home';
// import SignUp from './SignUp';
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' exact component={Home} />
//         <Route path='/sign-up' component={SignUp} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

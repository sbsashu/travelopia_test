import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TraveForm from "./component/TravelForm"
import List from "./component/List"
import Nav from "./component/Nav"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Nav />
        <Routes>
          <Route  path="/" exact element={<TraveForm />} />
           <Route  path="/list" exact  element={<List />} />
        </Routes>
    </Router>
    <ToastContainer autoClose={5000}  />
    </>
  );
}

export default App;

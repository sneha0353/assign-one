import React from "react"
import {Route,BrowserRouter as Router,Switch} from "react-router-dom"
import './color.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/inputC"
import ModalComponent from "./components/modalC";
import About from "./components/aboutC"
const App=()=>(
   <Router>
   <Switch>
   <Route exact path="/" component={InputForm}/>
   <Route exact path="/about-me" component={About}/>
  </Switch>
  </Router>
)
export default App;
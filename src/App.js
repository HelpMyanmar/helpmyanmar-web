import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from "react-router-dom"
import Home_Page from "./pages/home"

export default function App() {
  return (
    <BrowserRouter>
    <Route path="/home" component={Home_Page}></Route>
    </BrowserRouter>
  );
}

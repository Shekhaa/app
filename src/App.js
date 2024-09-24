import "./App.css";
//import Mains from "./components/Mains";
import Navbar from "./components/Navbar.js";
//import Char from "./components/Char";
//import About from "./About";
//step 1: There is too much code for resolving that issue just add components there
// <Mains name="my" />
// then import it here using export default, don't forget to return them in ();

//import React, { Component } from "react";

//new change=Used function based

import React from "react";
//react router

export default function App() {
  //using state

  //const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar />
    </>
  );
}

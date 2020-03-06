import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Nav from "./components/Nav";
import DrawingContext from "./context/DrawingContext";

class App extends React.Component {
  constructor() {
    super();
    this.state = { drawings: [] };
  }

  render() {
    return (
      <div className="row">
        <Nav></Nav>
        <Canvas></Canvas>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { drawings: [], currentDrawing: "" };
  }

  handleInput = e => {
    this.setState({ currentDrawing: e.target.value });
  };

  saveDrawing = e => {
    this.setState.drawings.push({
      src: <Canvas />,
      name: this.State.currentDrawing,
      key: this.State.drawings.Length + 1
    });
    //
    console.log(this.state.currentDrawing);
    console.log(this.state.drawings);
    return this.setState.drawings;
  };

  render() {
    const drawingList = this.state.drawings.map((sheet, index) => (
      <li key={sheet.name + (index + 1)}>{sheet.name}</li>
    ));

    return (
      <div className="row">
        <div className="sidenav">
          <button onClick={this.saveDrawing}>Save</button>
          <ul padding="20">
            <li>New Drawing</li>
            <input
              className="DrawingName"
              type="text"
              name="Name"
              value={this.state.currentDrawing}
              onChange={this.handleInput}
            ></input>
            {drawingList}
          </ul>
        </div>
        <Router>
          <div className="Navigation"></div>
        </Router>

        <Canvas></Canvas>
      </div>
    );
  }
}

export default App;

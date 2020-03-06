import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";

class App extends React.Component {
  constructor() {
    super();
    this.state = { drawings: [], currentDrawing: "" };
  }

  handleInput = e => {
    this.setState({ currentDrawing: e.target.value });
  };

  newDrawing = e => {
    var finished = document.getElementById("canvas");
    const context = finished.getContext("2d");
    context.clearRect(0, 0, finished.width, finished.height);
  };

  saveDrawing = e => {
    var finished = document.getElementById("canvas");
    const context = finished.getContext("2d");
    var saved = finished.toDataURL("image/png");

    this.setState([
      {
        drawings: this.state.drawings.push({
          src: saved,
          name: this.state.currentDrawing
        })
      }
    ]);
    context.clearRect(0, 0, finished.width, finished.height);
    console.log(this.state.currentDrawing);
    console.log(this.state.drawings);
    return this.setState.drawings;
  };

  openDrawing(index) {
    var finished = document.getElementById("canvas");
    const context = finished.getContext("2d");
    context.clearRect(0, 0, finished.width, finished.height);
    console.log(index);
    var image = new Image();
    image.src = this.state.drawings[index].src;
    image.onload = function() {
      context.drawImage(image, 0, 0);
    };
  }

  render() {
    const drawingList = this.state.drawings.map((sheet, index) => (
      <li
        className="listDrawings"
        onClick={() => this.openDrawing(index)}
        key={sheet.name + (index + 1)}
      >
        {sheet.name}
      </li>
    ));

    return (
      <div className="row">
        <div className="sidenav">
          <button onClick={this.newDrawing}>New Drawing</button>
          <p></p>
          <input
            className="DrawingName"
            type="text"
            name="Name"
            value={this.state.currentDrawing}
            onChange={this.handleInput}
            width="200"
          ></input>
          <button onClick={this.saveDrawing}>Save</button>
          <ul>{drawingList}</ul>
        </div>
        <Canvas></Canvas>
      </div>
    );
  }
}

export default App;

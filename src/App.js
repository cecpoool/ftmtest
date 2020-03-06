import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      drawings: [],
      currentDrawing: "",
      canvDraw: null,
      context: null
    };
  }

  //CLEANUP: cleaned up by popping some multiple use variables into state and setting this in componentDidMount
  //if I'd had time I might have added context and just pulled these canvas vars from the CANVAS component.

  componentDidMount() {
    this.setState.canvDraw = document.getElementById("canvas");
    this.setState.context = this.setState.canvDraw.getContext("2d");
  }

  handleInput = e => {
    this.setState({ currentDrawing: e.target.value });
  };

  //CLEANUP: realised I could just use this function within the other ones
  clearDrawing = e => {
    this.setState.context.clearRect(
      0,
      0,
      this.setState.canvDraw.width,
      this.setState.canvDraw.height
    );
  };

  saveDrawing = e => {
    var saved = this.setState.canvDraw.toDataURL("image/png");
    this.setState([
      {
        drawings: this.state.drawings.push({
          src: saved,
          name: this.state.currentDrawing
        })
      }
    ]);
    this.clearDrawing();
    return this.setState.drawings;
  };

  //I seem to need to reset the context for this function which makes sense
  //got rid of the console.logs
  openDrawing(index) {
    let context = this.setState.canvDraw.getContext("2d");
    this.clearDrawing();
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
          <button onClick={this.clearDrawing}>New Drawing</button>
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

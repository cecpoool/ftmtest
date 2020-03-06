import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { drawings: [], currentDrawing: "" };
  }

  handleInput = e => {
    this.setState({ currentDrawing: e.target.value });
  };

  saveDrawing = e => {
    var finished = document.getElementById("canvas");
    const context = finished.getContext("2d");
    var saved = finished.toDataURL("image/png");

    this.setState([
      {
        drawings: this.state.drawings.push({
          src: saved,
          name: this.state.currentDrawing,
          key: this.state.drawings.Length + 1
        })
      }
    ]);
    context.clearRect(0, 0, finished.width, finished.height);
    console.log(this.state.currentDrawing);
    console.log(this.state.drawings);
    return this.setState.drawings;
  };

  openDrawing(select) {
    var finished = document.getElementById("canvas");
    const context = finished.getContext("2d");

    var image = new Image();
    image.src = select.src;
    image.onload = function() {
      context.drawImage(image, 0, 0);
    };
  }

  render() {
    const drawingList = this.state.drawings.map((sheet, index) => (
      <li key={sheet.name + (index + 1)}>{sheet.name}</li>
    ));

    let listItems = document.getElementsByTagName("li");

    for (var i = 0; i < listItems.length; i++) {
      var item = listItems[i];
      item.onclick = this.openDrawing(item);
    }

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

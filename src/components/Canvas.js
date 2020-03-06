import React from "react";

class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    //I used the Canvas docs from MDN to help with this part. I feel comfortable about all the code I used except clientx and clienty
    //- which i assume is mouse co-ords but not 100%
    function drawingEvent(ev) {
      let isDrawing = false;
      let x = 0;
      let y = 0;
      const rect = canvas.getBoundingClientRect();

      canvas.addEventListener("mousedown", e => {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
        isDrawing = true;
      });

      canvas.addEventListener("mousemove", e => {
        if (isDrawing === true) {
          drawLine(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top);
          x = e.clientX - rect.left;
          y = e.clientY - rect.top;
        }
      });

      window.addEventListener("mouseup", e => {
        if (isDrawing === true) {
          drawLine(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top);
          x = 0;
          y = 0;
          isDrawing = false;
        }
      });

      function drawLine(ctx, x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
      }
    }

    canvas.addEventListener("mousedown", drawingEvent, false);
    return;
  }

  render() {
    return (
      <canvas
        id="canvas"
        ref="canvas"
        className="can1"
        width={640}
        height={425}
      />
    );
  }
}

export default Canvas;

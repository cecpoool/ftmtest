import React, { setState } from "react";

function Nav() {
  const [drawings, setDrawings] = setState([]);

  //   function SaveDrawing() {
  //     setDrawings.push(drawings + 1);
  //     return drawings;

  //   }

  return (
    <div className="sidenav">
      <button>SAVE</button>
      <ul>
        <li>New Drawing</li>
      </ul>
    </div>
  );
}

export default Nav;

import React from "react";

// Jumbotron component displaying any props.children passed in
function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300, clear: "both", paddingTop: 120, textAlign: "center",
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

// Export component
export default Jumbotron;

import React from 'react';
import ReactDOM from 'react-dom';


console.log("React", React);

const heading1 = React.createElement("h1", { className: "heading1" }, "KKR");
const heading2 = React.createElement("h3", { className: "heading3" }, "MI");

const container1 = React.createElement("div", { className: "container" }, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);
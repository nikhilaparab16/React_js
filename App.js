import React from "react";
import ReactDOM from "react-dom/client";

const title = <span>React App</span>
const HeaderComponent = () =>(
    <h1>This is header</h1>
)


const HeadingComponent = () =>(
    <div className="container">
        <HeaderComponent></HeaderComponent>
        {HeaderComponent()}
        <h2 className="heading">Hello world from Functional Component</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)
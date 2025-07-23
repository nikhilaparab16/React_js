/*
<div class="root">
    <div class="parent">
        <div class="child">
            <h1></h1>
            <h2></h2>
        </div> 
    </div>
</div>



*/


// const heading = React.createElement(
//     "h1",
//     {id:"heading", xyz:"title"},
//     "Hello World From React"
// );
//console.log(heading) //its an object ..its not tag , react element 

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
            [
                React.createElement("h1",{},"I am H1 tag"),
                React.createElement("h2",{},"I am h2 tag")
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("h1",{},"I am H1 tag"),
                React.createElement("h2",{},"I am h2 tag")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
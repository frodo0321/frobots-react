const express = require("express");
const app = express();
const moment = require("moment");

const cssLoader = require("./cssLoader");

import React from "react";
import ReactDOM from 'react-dom'
const ReactDOMServer = require("react-dom/server");

import Html from "./components/Html";
import Home from "./components/Home";
import Post from "./components/Post";
import Error404 from "./components/errors/404";

require("./cssLoader").load(__dirname + "/style.scss");

//import posts from "./posts";
import posts from "./components/posts";
//const posts2 = require("./components/posts");
//console.log("POSTS2", posts2);

require("./middleware/requestLogger")(app);


app.get("/css/style.css", function(request, response, next) {
    response.setHeader('Content-Type', 'text/css');

    let css = cssLoader.compileCss();

    return response.send(css);
})

app.get("/", function(request, response) {

    var html = ReactDOMServer.renderToString(<Home />);

    response.send(Html({body: html, title: "frobots"}));
});

require("./middleware/posts")(app);
require("./middleware/errorHandler")(app);


var PORT = 3000;
app.listen(PORT, function() {
    console.log("Server started at http://localhost:" + PORT);
});

process.on("uncaughtException", error => {
    console.error(error);
    process.exit(1); // not optional
});


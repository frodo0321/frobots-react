const express = require("express");
const app = express();

import React from "react";
const ReactDOMServer = require("react-dom/server");

import Html from "./components/Html";
import App from "./components/App";

app.use(function requestLogger(request, response, next) {

    const date = new Date();

    console.log(date.toLocaleString(), request.method, request.path);

    return next();
})


app.get("/", function(request, response) {

    var html = ReactDOMServer.renderToString(<App />);
    console.log("rendered html", html);

    response.send(Html({body: html, title: "frobots"}));
});


app.use(function errorHandler(error, request, response, next) {
    console.error(error);
    response.status(500);
    response.json({error: true});
})


var PORT = 3000;
app.listen(PORT, function() {
    console.log("Server started at http://localhost:" + PORT);
});

process.on("uncaughtException", error => {
    console.error(error);
    process.exit(1); // not optional
});


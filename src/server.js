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

require("./cssLoader").load(__dirname + "/style.css");

import posts from "./posts";

app.use(function requestLogger(request, response, next) {

    const date = new Date();

    console.log(date.toLocaleString(), request.method, request.path);

    return next();
})

app.get("/style.css", function(request, response, next) {
    response.setHeader('Content-Type', 'text/css');

    let css = cssLoader.compileCss();

    return response.send(css);
})

app.get("/", function(request, response) {

    var html = ReactDOMServer.renderToString(<Home />);

    response.send(Html({body: html, title: "frobots"}));
});

function fetchPost(request) {

    var date = request.params.date;
    var id = request.params.postId;

    date = moment(date, "YYYY-MM-DD");
    
    var ret = posts.filter(post => {

        var diffDays = moment(post.createdAt).diff(date, "days");

        var titleAsId = post.title.toLowerCase().replace(/[ ]/g, "-");

        let dateMatch = diffDays < 1;
        let titleMatch = titleAsId == id;

        let match = dateMatch && titleMatch;

        return match;
    })

    ret = ret[0];

    return ret;
}

app.get("/p/:date/:postId", function(request, response, next) {

    var post = fetchPost(request);
    if (!post || !post.component) {
        let error = new Error("Not Found");
        error.status = 404;
        return next(error);
        //return response.status(404).json({error: "Not Found"});
    }

    var Component = (<Post post={post} />);
    //console.log("hydrating");
    //var hydrated = ReactDOM.hydrate(Component);
    //console.log("hydrated", hydrated);
    var html = ReactDOMServer.renderToString(Component);
    

    response.send(Html({body: html, title: "frobots"}));
})

app.use(function errorHandler(error, request, response, next) {

    if (error.status == 404) {
        var html = ReactDOMServer.renderToString(<Error404 />);
        return response.send(Html({body: html, title: "frobots"}));
    }

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


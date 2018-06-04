import React from "react";
import ReactDOMServer from "react-dom/server";

import moment from "moment";
import posts from "../components/posts";

import Html from "../components/Html";
import Post from "../components/Post"

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
    console.log("found post", ret);

    return ret;
}

module.exports = function(app) {

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
}

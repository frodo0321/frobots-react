import React from "react";
import ReactDOMServer from "react-dom/server";

import moment from "moment";
import posts from "../components/posts";

import Html from "../components/Html";
import Post from "../components/Post"
import MainLayout from "../components/MainLayout";


import {titleToId} from "../utils";

function fetchPost(request) {

    var date = request.params.date;
    var id = request.params.postId;

    date = moment(date, "YYYY-MM-DD");
    
    var ret = posts.filter(post => {

        var diffDays = moment(post.date).diff(date, "days");

        var titleAsId = titleToId(post.title);

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

        var component = (
            <MainLayout>
                <div className="post-container" style={{paddingTop: "72px"}}>
                    <Post post={post} />
                </div>
            </MainLayout>
        );

        var html = ReactDOMServer.renderToString(component);
        

        response.send(Html({body: html, title: post.title + " - frobots"}));
    })
}

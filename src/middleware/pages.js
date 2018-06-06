import React from "react";
import ReactDOMServer from "react-dom/server";

import moment from "moment";
import pages from "../components/pages";

import Html from "../components/Html";
import MainLayout from "../components/MainLayout";
import Page from "../components/Page";


import {titleToId} from "../utils";

function fetchPage(request) {

    var id = request.params.pageId;

    var ret = pages.filter(page => {

        var titleAsId = titleToId(page.title);

        let titleMatch = titleAsId == id;

        let match = titleMatch;

        return match;
    })

    ret = ret[0];
    console.log("found page", ret);

    return ret;
}

module.exports = function(app) {

    app.get("/:pageId", function(request, response, next) {

        console.log("pageId", request.params);

        var page = fetchPage(request);
        if (!page) {
            let error = new Error("Not Found");
            error.status = 404;
            return next(error);
            //return response.status(404).json({error: "Not Found"});
        }

        var component = (
            <MainLayout>
                <Page page={page} />
            </MainLayout>
        );

        var html = ReactDOMServer.renderToString(component);
        

        response.send(Html({body: html, title: page.title + " - frobots"}));
    })
}


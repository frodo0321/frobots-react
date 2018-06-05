import React from "react";
import ReactDOMServer from "react-dom/server";

import Html from "../components/Html";
import Error404 from "../components/errors/404";

module.exports = function(app) {

    app.use(function errorHandler(error, request, response, next) {

        if (error.status == 404) {
            var html = ReactDOMServer.renderToString(<Error404 />);
            return response.send(Html({body: html, title: "frobots"}));
        }

        console.error(error);
        response.status(500);
        response.json({error: true});
    })

}

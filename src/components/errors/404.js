import React from "react";

require("../../cssLoader").load(__dirname + "/404.scss");

import TestPost from "../posts/TestPost";

import MainLayout from "../MainLayout";


class Error404 extends React.Component {
    render() {

        return (
            <MainLayout>
                <div className="Error404">
                    Error 404 - Not Found
                </div>
            </MainLayout>
        );
    }
}

export default Error404;

import React from "react";

import {pageToUrl} from "../utils";

require("../cssLoader").load(__dirname + "/LeftSidebar.scss");

import pages from "./pages";

class LeftSidebar extends React.Component {
    render() {


        var pageHtml = (
            <ul>{
                pages.map(page => {
                    return (
                        <li>
                            <a href={pageToUrl(page)}>{page.title}</a>
                        </li>
                    );
                })
            }</ul>
        );

        return (
            <div className="LeftSidebar">
                <div className="list">
                    <div className="title">Pages</div>
                    {pageHtml}
                </div>
            </div>
       );
    }
}

export default LeftSidebar;

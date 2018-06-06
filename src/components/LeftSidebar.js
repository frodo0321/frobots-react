import React from "react";

import {pageToUrl, titleToId} from "../utils";

require("../cssLoader").load(__dirname + "/LeftSidebar.scss");

import pages from "./pages";

const pagesDisplayed = ["books", "resume"];

class LeftSidebar extends React.Component {
    render() {


        var pageHtml = (
            <ul>{
                pages
                    .filter(page => {
                        return pagesDisplayed.includes(titleToId(page.title));
                    })
                    .map(page => {
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

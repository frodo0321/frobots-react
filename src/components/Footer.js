import React from "react";

import {pageToUrl, titleToId} from "../utils";

require("../cssLoader").load(__dirname + "/Footer.scss");

import pages from "./pages";

const pagesDisplayed = ["terms-and-conditions", "privacy-policy"];

class Footer extends React.Component {
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
            <header className="Footer">
                <div className="footer-sidebar">
                    <div className="text">
                        {pageHtml}
                    </div>
                </div>
            </header>
        );
    }
}

export default Footer;

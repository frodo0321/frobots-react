import React from "react";

require("../cssLoader").load(__dirname + "/Page.scss");

export const title = "Resume";

class Page extends React.Component {
    render() {

        var page = this.props.page;

        return (
            <div className="Page">
                <div className="page-header">
                    <div className="page-title">{page.title}</div>
                </div>

                <page.component />
            </div>
       );
    }
}

export default Page;

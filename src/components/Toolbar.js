import React from "react";

require("../cssLoader").load(__dirname + "/Toolbar.css");


class Toolbar extends React.Component {
    render() {

        return (
            <div className="Toolbar">
                <h1 className="title">
                    <a href="/" rel="home">frobots</a>
                </h1>
            </div>
        );
    }
}

export default Toolbar;

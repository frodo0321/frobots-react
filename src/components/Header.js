import React from "react";

require("../cssLoader").load(__dirname + "/Header.scss");


class Header extends React.Component {
    render() {

        return (
            <header className="Header">
                <h1 className="title">
                    <a href="/" rel="home">frobots</a>
                </h1>
            </header>
        );
    }
}

export default Header;

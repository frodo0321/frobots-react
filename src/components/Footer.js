import React from "react";

require("../cssLoader").load(__dirname + "/Footer.css");


class Footer extends React.Component {
    render() {

        return (
            <header className="Footer">
                <div>Some links</div>
            </header>
        );
    }
}

export default Footer;

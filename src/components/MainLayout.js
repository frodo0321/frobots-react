import React from "react";

import Toolbar from "./Toolbar";

require("../cssLoader").load(__dirname + "/Home.css");

class MainLayout extends React.Component {
    render() {

        return (
            <div className="MainLayout">
                <Toolbar />
                {this.props.children}
                <div className="footer" style={{width: "100%", backgroundColor: "black"}}></div>
            </div>
       );
    }
}

export default MainLayout;

import React from "react";

import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

require("../cssLoader").load(__dirname + "/MainLayout.css");

class MainLayout extends React.Component {
    render() {

        return (
            <div className="MainLayout">
                <Header />
                <div className="main">
                    <LeftSidebar />
                    <div className="main-content">
                        {this.props.children}
                    </div>
                </div>
                <div className="footer" style={{width: "100%", backgroundColor: "black"}}></div>
            </div>
       );
    }
}

export default MainLayout;

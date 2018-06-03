import React from "react";

import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import Footer from "./Footer";

require("../cssLoader").load(__dirname + "/MainLayout.scss");

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
                    <div className="right-sidebar-placeholder" style={{}}></div>
                </div>
                <Footer />
            </div>
       );
    }
}

export default MainLayout;

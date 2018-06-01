import React from "react";

require("../cssLoader").load(__dirname + "/LeftSidebar.css");

class LeftSidebar extends React.Component {
    render() {

        return (
            <div className="LeftSidebar">
                <h3>Left Sidebar</h3>
                <div className="list">
                    <div className="title">Pages</div>
                    <div className="items">
                        <div className="item">test</div>
                    </div>
                </div>
            </div>
       );
    }
}

export default LeftSidebar;

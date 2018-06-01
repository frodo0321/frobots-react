import React from "react";

require("../cssLoader").load(__dirname + "/LeftSidebar.css");

class LeftSidebar extends React.Component {
    render() {

        return (
            <div className="LeftSidebar">
                <div className="list">
                    <div className="title">Pages</div>
                    <ul>
                        <li><a href="#">Test1</a></li>
                        <li><a href="#">TETS2</a></li>
                    </ul>
                </div>
            </div>
       );
    }
}

export default LeftSidebar;

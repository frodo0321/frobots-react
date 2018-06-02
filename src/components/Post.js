import React from "react";

import MainLayout from "./MainLayout";

require("../cssLoader").load(__dirname + "/Post.css");


class Post extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        console.log("PROPS", this.props);

        return (
            <MainLayout>
                <div className="Post">
                    <div className="title">{this.props.post.title}</div>
                    <div className="content">
                        <this.props.post.component />
                    </div>
                </div>
            </MainLayout>
       );
    }
}

export default Post;

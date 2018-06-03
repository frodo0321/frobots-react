import React from "react";

import MainLayout from "./MainLayout";
import PostHeader from "./PostHeader";

require("../cssLoader").load(__dirname + "/Post.scss");


class Post extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        console.log("PROPS", this.props);

        return (
            <MainLayout>
                <div className="Post">
                    <PostHeader post={this.props.post} />

                    <div className="content">
                        <this.props.post.component />
                    </div>
                </div>
            </MainLayout>
       );
    }
}

export default Post;

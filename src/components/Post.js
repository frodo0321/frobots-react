import React from "react";

import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

import {postToUrl} from "../utils";

require("../cssLoader").load(__dirname + "/Post.scss");


class Post extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {
        console.log("POST", this);

        let post = this.props.post;
        let type = this.props.type || "full"; // full, preview
        var content;
        if (type == "full") {
            content = <post.component />
        }
        else if (type == "preview") {
            content = post.preview;
        }
        else {
            throw new Error("Unknown post type " + type);
        }

        return (
            <div className="Post">
                <PostHeader post={post} />
                <PostContent content={content} />
                <div><a href={postToUrl(post)}>Continue reading →</a></div>
            </div>
       );
    }
}

export default Post;

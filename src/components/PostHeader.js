import React from "react";
import moment from "moment";

require("../cssLoader").load(__dirname + "/PostHeader.scss");


function postTitleToId(title) {
    return title.toLowerCase().replace(/[ ]/g, "-");
}


class Post extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        let post = this.props.post;

        let postDate = moment(post.createdAt);
        let displayDateString = postDate.format("MMM DD, YYYY");
        let hrefDateString = postDate.format("YYYY-MM-DD");

        let postId = postTitleToId(post.title);

        let postUrl = "/p/" + hrefDateString + "/" + postId;

        let clockSvg = (
            <svg className="clock" width="12" height="12">
                <g strokeWidth="1">
                    <circle cx="6" cy="6" r="5" ></circle>
                    <line x1="6" y1="6" x2="6" y2="3"></line>
                    <line x1="6" y1="6" x2="8" y2="9"></line>
                </g>
            </svg>
        );

        return (
            <div className="PostHeader">
                <div className="post-title">
                    <a href={postUrl}>{post.title}</a>
                </div>
                <div className="post-meta">
                    <span className="post-date">
                        <a href={postUrl}>
                            <span>
                                {clockSvg}
                                {displayDateString}
                            </span>
                        </a>
                    </span>
                </div>
            </div>
       );
    }
}

export default Post;

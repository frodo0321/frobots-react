import React from "react";
import moment from "moment";

require("../cssLoader").load(__dirname + "/PostList.css");

import posts from "../posts";


function postTitleToId(title) {
    return title.toLowerCase().replace(/[ ]/g, "-");
}


class PostList extends React.Component {
    render() {

        var postsHtml = posts.map(post => {

            var postDate = moment(post.createdAt);
            var displayDateString = postDate.format("MMM DD, YYYY");
            var hrefDateString = postDate.format("YYYY-MM-DD");

            var postId = postTitleToId(post.title);

            var postUrl = "/p/" + hrefDateString + "/" + postId;

            var clockSvg = (
                <svg className="clock" width="12" height="12">
                    <g strokeWidth="1">
                        <circle cx="6" cy="6" r="5" ></circle>
                        <line x1="6" y1="6" x2="6" y2="3"></line>
                        <line x1="6" y1="6" x2="8" y2="9"></line>
                    </g>
                </svg>
            );

            return (
                <div className="post">
                    <div className="post-header">
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
                </div>
            );
        });

        //console.log("posts html", postsHtml);

        return (
            <div className="PostList">
                {postsHtml}
            </div>
        );
    }
}

export default PostList;

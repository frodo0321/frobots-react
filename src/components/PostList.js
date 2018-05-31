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
            var dateString = postDate.format("YYYY-MM-DD");

            var postId = postTitleToId(post.title);

            return (
                <div className="post">
                    <div className="post-title">
                        <a href={"/p/" + dateString + "/" + postId}>{post.title}</a>
                    </div>
                    <div className="post-date">{post.dateString}</div>
                </div>
            );
        });

        console.log("posts html", postsHtml);

        return (
            <div className="PostList">
                List of posts:
                {postsHtml}
            </div>
        );
    }
}

export default PostList;

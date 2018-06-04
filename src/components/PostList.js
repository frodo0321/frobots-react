import React from "react";

require("../cssLoader").load(__dirname + "/PostList.scss");

import posts from "./posts";

import PostHeader from "./PostHeader";



class PostList extends React.Component {
    render() {

        let filteredPosts = posts.filter(post => {
                return post.published && post.public;
            })
        // sort by date
        filteredPosts.sort((a, b) => b.date - a.date)

        var postsHtml = filteredPosts.map(post => {
                return (
                    <div className="post">
                        <PostHeader post={post} />
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

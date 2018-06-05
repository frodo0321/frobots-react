import React from "react";

require("../cssLoader").load(__dirname + "/PostList.scss");

//import PostHeader from "./PostHeader";
//import PostContent from "./PostContent";
import Post from "./Post";



class PostList extends React.Component {
    render() {

        let posts = this.props.posts;

        let filteredPosts = posts.filter(post => {
                return post.published && post.public;
            })
        // sort by date
        filteredPosts.sort((a, b) => b.date - a.date)

        var postsHtml = filteredPosts.map(post => {
                return (
                    <Post post={post} type="preview" />
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

import React from "react";

import Toolbar from "./Toolbar";

class Post extends React.Component {
    render() {

        return (
            <div className="content">
                <Toolbar />
                <div className="post">Content</div>
            </div>
       );
    }
}

export default Post;

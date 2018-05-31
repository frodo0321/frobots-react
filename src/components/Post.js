import React from "react";

import MainLayout from "./MainLayout";

class Post extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        console.log("PROPS", this.props);

        return (
            <MainLayout>
                <div className="content">
                    <div className="title">{this.props.post.title}</div>
                    <this.props.post.component />
                </div>
            </MainLayout>
       );
    }
}

export default Post;

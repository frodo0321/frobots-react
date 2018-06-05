import React from "react";
import moment from "moment";

require("../cssLoader").load(__dirname + "/PostContent.scss");


class PostContent extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        let content = this.props.content;
        console.log("POST CONTENT", this);

        return (
            <div className="PostContent">
                {content}
            </div>
       );
    }
}

export default PostContent;


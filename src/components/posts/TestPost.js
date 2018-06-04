import React from "react";

export const title = "Test Post";
export const date = new Date();

export const published = true;
module.exports.public = true;


class TestPost extends React.Component {
    render() {

        return (
            <div className="content">
                <div>
                    This is a test post
                </div>
            </div>
       );
    }
}

export const component = TestPost;
export default TestPost;

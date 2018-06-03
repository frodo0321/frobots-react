import React from "react";

require("../cssLoader").load(__dirname + "/Home.scss");

import PostList from "./PostList";

import MainLayout from "./MainLayout";


class Home extends React.Component {
    render() {

        return (
            <MainLayout>
                <div className="Home">
                    <PostList />
                </div>
            </MainLayout>
        );
    }
}

export default Home;

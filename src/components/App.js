import React from "react";

import "./App.css";

import Toolbar from "./Toolbar";
import Post from "./Post";


class App extends React.Component {
    render() {

        var toolbarStyle = {
            width: "100%",
            backgroundColor: "rgba(0,0,255,0.2)"
        };

        return (
            <div className="App">
                <Toolbar />
                <Post />
            </div>
        );
    }
}

export default App;

import React from "react";

require("../cssLoader").load(__dirname + "/App.css");

import Toolbar from "./Toolbar";
import Post from "./Post";


class App extends React.Component {
    render() {

        return (
            <div className="App">
                <Toolbar />
                <Post />
            </div>
        );
    }
}

export default App;

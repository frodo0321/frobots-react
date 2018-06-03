import React from "react";

require("../cssLoader").load(__dirname + "/App.scss");

import Home from "./Home";


class App extends React.Component {
    render() {

        return (
            <div className="App">
                <Home />
            </div>
        );
    }
}

export default App;

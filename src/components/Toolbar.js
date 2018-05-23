import React from "react";

class Toolbar extends React.Component {
    render() {

        var toolbarStyle = {
            width: "100%",
            backgroundColor: "rgba(0,0,255,0.2)"
        };

        return (
            <div style={toolbarStyle}>Frobots</div>
        );
    }
}

export default Toolbar;

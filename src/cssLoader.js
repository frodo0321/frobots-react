const fs = require("fs");

function CssLoader() {
    this.css = "";
    this.load = function load(path) {
        var css = fs.readFileSync(path)
        this.css += css;
    }
}

module.exports = new CssLoader();

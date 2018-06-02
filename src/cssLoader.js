const nodeSass = require("node-sass");
const path = require("path");
const fs = require("fs");

function CssLoader() {
    this.css = "";
    this.scss = "";
    this.load = function load(filePath) {
        let fileData = fs.readFileSync(filePath)
        if (path.extname(filePath) == ".css") {
            this.css += fileData;
        }
        if (path.extname(filePath) == ".scss") {
            this.scss += fileData;
        }
    }
    this.compileCss = function compileCss() {
        let css = "";
        if (this.scss) {
            let result = nodeSass.renderSync({
                    data: this.scss,
                    outputStyle: "expanded"
                });
            css += result.css.toString();
        }
        css += this.css;
        return css;
    }
}

module.exports = new CssLoader();

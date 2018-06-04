const nodeSass = require("node-sass");
const path = require("path");
const fs = require("fs");

function CssLoader() {

    this.dirty = false;

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
        this.dirty = true;
    }
    this.compileCss = function compileCss() {
        if (this.dirty == false) {
            return this.compiledCss;
        }
        let css = "";
        if (this.scss) {
            let result = nodeSass.renderSync({
                    data: this.scss,
                    outputStyle: "expanded"
                });
            css += result.css.toString();
        }
        css += this.css;

        this.compiledCss = css;
        this.dirty = false;
        return this.compiledCss;
    }
}

module.exports = new CssLoader();

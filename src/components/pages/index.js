const fs = require("fs");
const path = require("path");


let files = fs.readdirSync(__dirname);
//files = files.filter(file => file.endsWith(".js") && file != "index.js");

files = files
    .filter(file => !file.endsWith(".swp"))
files = files
    .filter(file => {

        var isJs = file.endsWith(".js");
        var isIndex = file == "index.js";
        var isDir = fs.lstatSync(path.join(__dirname, file)).isDirectory();

        return (isJs || isDir) && !isIndex;
    });

const pages = files.map(file => {
    return require("./" + file);
})

export default pages;

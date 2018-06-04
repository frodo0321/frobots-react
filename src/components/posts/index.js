const fs = require("fs");


let files = fs.readdirSync(__dirname);
files = files.filter(file => file.endsWith(".js") && file != "index.js");

const posts = files.map(file => {
    return require("./" + file);
})

export default posts;

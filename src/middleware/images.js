var fs = require('fs');
var path = require('path');


let walk = function walk(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
            if (err) return done(err);
            var pending = list.length;
            if (!pending) return done(null, results);
            list.forEach(function(file) {
                    file = path.resolve(dir, file);
                    fs.stat(file, function(err, stat) {
                            if (stat && stat.isDirectory()) {
                                walk(file, function(err, res) {
                                    results = results.concat(res);
                                    if (!--pending) done(null, results);
                                });
                            } else {
                                results.push(file);
                                if (!--pending) done(null, results);
                            }
                    });
            });
    });
};

function ImageLoader() {


    const imageFormats = ["jpg", "png"];

    this.images = [];


    this.checkDuplicates = function(images) {
        images = images || this.images;

        let duplicateImage = images.filter(image => {

                let baseNames = images.map(image => image.base);

                let numOccurances = baseNames.reduce((result, base) => result + (base == image.base), 0)

                return numOccurances > 1;
            })
        if (duplicateImage.length > 0) {
            console.warn("Warning: found multiple images with same name: ", duplicateImages);
        }
    
    }

    this.load = function(dirname, cb) {

        cb = cb || function() {};

        walk(path.resolve(path.join(dirname, "../components/")), (error, results) => {
            if (error) {
                return cb(error, null);
            }
            results = results.filter(file => {
                let format = path.extname(file).split(".")[1];
                return imageFormats.includes(format);
            })
            let images = results.map(file => {

                let relative = path.relative(dirname, file);
                let absolute = file;
                let base = path.basename(file);
                //let data = fs.readFileSync(absolute);
                
                return {
                    relative,
                    absolute,
                    base,
                    //data
                 };
            });

            this.images = images;

            this.checkDuplicates();

            return cb(null, images)
        });
    }

}

let images = [];
let imageLoader = new ImageLoader();
imageLoader.load(__dirname, function cb(error, results) {
    if (error) {
        return console.error(error);
    }
    images = results;
    //console.log("images", images);
});



module.exports = function(app) {

    app.get("/images/:filename", function(request, response, next) {
    
        let image = images.filter(image => image.base == request.params.filename)[0]

        return fs.readFile(image.absolute, function(error, data) {

            response.writeHead(200, {'Content-Type': 'image/gif' });
            response.end(data, 'binary')

        })

    
    })

}

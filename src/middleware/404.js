

module.exports = function(app) {

    app.use(function (request, response, next) {
        let error = new Error("Not Found");
        error.status = 404;
        return next(error);
    })

}

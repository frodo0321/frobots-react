
module.exports = function(app) {

    app.use(function requestLogger(request, response, next) {

        const date = new Date();

        console.log(date.toLocaleString(), request.method, request.path);

        return next();
    })

}

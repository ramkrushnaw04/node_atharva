    module.exports = (app) => {
    const apps = require('../Controllers/app.controller.js');
    const AppError = require('../../utils/appError');

    app.get('/allservices', apps.getAllServices);
    app.get('/service/:type', apps.getServiceByType);
    app.post('/service/:type/form', apps.createRequest);
    app.post('/service/:type/calculate', apps.calculateEMI);

    app.post('/member', apps.registerMember);
    app.put('/updatepassword', apps.updatePassword);
    app.delete('/deletemember', apps.deleteMember);

    app.put('/updaterequest', apps.updateRequest);
    app.delete('/deleterequest', apps.deleteRequest);

    app.all('*', (req, res, next) => {
        next(new AppError(`Unable to find ${req.originalUrl} on this server`, 404));
    });

  
    app.use((err, req, res, next) => {
        err.statusCode = err.statusCode || 500;
        err.status = err.status || 'fail';
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    });
};

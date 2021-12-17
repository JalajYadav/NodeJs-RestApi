const formidable = require('formidable');
const { authServices } = require('../services/index.services.js')

const login = (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.log(err);
            return;
        }
        await authServices.loginUser(res, fields);
    });
}

const register = (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.log(err);
            return;
        }
        await authServices.registerUser(res, fields, files);
    });
}

module.exports = {
    login,
    register
}

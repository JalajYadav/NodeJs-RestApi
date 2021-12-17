const formidable = require('formidable');
const { authServices } = require('../services/index.services.js')

const login = (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.log(err);
            return;
        }
        const result = await authServices.loginUser(fields);
        res.send(result);
    });
}

const register = (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.log(err);
            return;
        }
        const result = await authServices.registerUser(fields, files);
        res.send(result);
    });
}

module.exports = {
    login,
    register
}

const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
const db = require("../database/models/index.js");

const registerUser = async (res, fields, files) => {
    try {
        await db.user.create({
            profileImg: files.profileImg.filepath,
            firstName: fields.firstName,
            lastName: fields.lastName,
            email: fields.email,
            phone: fields.phone,
            password: fields.password,
            dob: fields.dob,
            gender: fields.gender,
            isDeleted: 'false'
        })
        res.send("Added User Successfully");
    } catch (err) {
        console.log(err);
        res.send(err.errors[0]);
    }
}

const loginUser = async (res, fields) => {
    try {
        const emailCheck = await db.user.findAll({
            group: ['id'],
            attributes: {
                include: [
                    [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'NoOfUsers']
                ],
            },
            where: {
                email: fields.email,
            }
        });
        if (emailCheck.length != 1) throw { errors: [{ message: "Email does Not Exist" }] };
        const passwordCheck = await db.user.findAll({
            group: ['id'],
            attributes: {
                include: [
                    [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'NoOfUsers']
                ],
            },
            where: {
                email: fields.email,
                password: fields.password
            }
        });
        if (passwordCheck.length != 1) throw { errors: [{ message: "Password Does Not Match" }] };

        const token = jwt.sign(
            {
                userId: passwordCheck[0].id,
                userName: passwordCheck[0].firstName,
            }
            , 'shhhhh');
        res.header('auth-token', token).send({ message: "Logged In Successfully" });
    } catch (err) {
        console.log(err);
        res.send(err.errors[0]);
    }
}
module.exports = {
    registerUser,
    loginUser
}

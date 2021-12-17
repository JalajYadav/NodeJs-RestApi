const db = require("../database/models/index.js");

const registerUser = async (fields, files) => {
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
        return "Added User Successfully";
    } catch (err) {
        console.log(err);
        return "ERROR, user was Not Created";
    }
}

const loginUser = async (fields) => {
    try {
        const res = await db.user.findAll({
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
        return res;
    } catch (err) {
        console.log(err);
        return "User Does Not Exist"
    }
}
module.exports = {
    registerUser,
    loginUser
}


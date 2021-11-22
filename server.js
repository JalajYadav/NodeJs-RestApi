const PORT = 5000;
require('dotenv').config()

//TODO: Require Local JavaScript Files
const sequelize = require('./util/database.js');
const User = require('./models/user.js');
const Post = require('./models/post.js');
const PostLikes = require('./models/postLikes.js');
const PostMedia = require('./models/postMedia.js');

//TODO: Require all 3rd Party Packages
const formidable = require('formidable');
const jwt = require('jsonwebtoken');
const path = require('path');

//TODO: Setup the bcrypt library
const bcrypt = require('bcrypt');
const saltRounds = 10;

//TODO: Setup the express server
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

//TODO: Export modules
module.exports = {
    app: app,
    jwt: jwt,
    formidable:formidable,
    bcrypt: bcrypt,
    saltRounds:saltRounds,
}

//TODO: In Case the database does not exist, create it
sequelize
    .sync({force: true,})
    .then((result) =>{
        console.log('😁',result);
    })
    .catch((err)=>{
        console.log('👿',err);
    })

app.listen(PORT,()=>{
    console.log(`CORS ENABLED Server running on port http://localhost:${PORT}/`);
})

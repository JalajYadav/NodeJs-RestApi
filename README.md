# NodeJs-RestApi
This is an exemplar repository if you wish to create Production Level NodeJs Api's.
<p align="center" width="100%">
    <img width="33%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png">
</p>

Resources i have followed:
1) https://www.youtube.com/watch?v=ExTZYpyAn6s
2) https://dev.to/ccleary00/project-structure-for-an-express-rest-api-when-there-is-no-standard-way-4gk3
3) https://www.youtube.com/watch?v=F-5D-n91hMc
4) https://github.com/goldbergyoni/nodebestpractices
5) https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp



Commands in the terminal i used:
1) npm init
2) npm i sequelize pg pg-hstore
3) npm install -g sequelize-cli
4) touch .sequelizerc
5) createdb -U postgres database-development; // Inorder to create database u will run the following command
6) sequelize init
7) npx sequelize-cli model:generate --name user --attributes profileImg:string,firstName:string,lastName:string,email:string,phone:string,password:string,dob:'string',gender:enum:'{male,female}',token:String,isDeleted:boolean;
8) npx sequelize-cli model:generate --name post --attributes description:string,userId:integer,isDeleted:boolean;
9) npx sequelize-cli model:generate --name postLike --attributes postId:integer,userId:integer;
10) npx sequelize-cli model:generate --name postMedia --attributes url:string,postId:integer,type:enum:'{image,video}';
11) sequelize db:migrate

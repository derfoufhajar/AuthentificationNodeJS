const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config();
//import routes
const authRoute=require('./routes/auth');
const usersRoute=require('./routes/users');
//connect to db

 mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser:true},
 () => console.log('connected to db!')
 );

//Middleware
app.use(express.json());
//Route midllewares
app.use('/api/user',authRoute);
app.use('/api/users',usersRoute);
app.listen(3000, () => console.log('server is running y all'));

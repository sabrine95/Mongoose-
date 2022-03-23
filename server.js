const express= require ('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json())

//connecting to database

const PORT = process.env.PORT;
app.listen(PORT, (err)=> 
	err ? console.error(err) : console.log('server is running on port ${PORT}')
);
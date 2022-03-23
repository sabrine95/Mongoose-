const mongoose = require('mongoose');
const Person = require('./models/Person')
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true , useUnifiedTopology: true },
    async ()=>{
        console.log("Connected to DB!");
        const newPerson = new Person({name:"koussay",age:18,favoriteFoods:"kosksi"})

        const got = await newPerson.save()

        console.log(got)
    }
);
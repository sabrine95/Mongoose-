const mongoose = require('mongoose');
const Person = require('./models/Person')
const dotenv = require('dotenv');
dotenv.config();


    
//connection to database 
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true , useUnifiedTopology: true },
    async ()=>{
        console.log("Connected to DB!");
        const newPerson = new Person({name:"koussay",age:18,favoriteFoods:"kosksi"}) 

        const got = await newPerson.save()

        console.log(got)
        const newPerson1 = new Person({name : 'bilel', age: 20, favoriteFoods : ['sushi','borito']})
        newPerson1.save((err, data)=> {
            console.log(data)
        })
        const arrayofPeople =[
  {name: 'amani', age: 21, favoriteFoods:['fried chicken', 'chicken wings', 'chicken nuggets'] },
  {name: 'asma', age: 24, favoriteFoods : ['watermelon', 'burger']},
  {name: 'wassim', age: 25, favoriteFoods : ['vegetable']} ]

  Person.create(arrayofPeople,(err,createdPeople)=>{
    console.log(createdPeople);}
   );  

//    Person.find({name:'bilel'}) //    Person.find({name:'bilel'}) //find() by name 

//    Person.findById('623cd850653297c0df51f265')  *******//Person.find() by ID

        // Person.findOne({favoriteFoods : {$all : [food]}}) 

        // Person.findOneAndUpdate({name:'bilel'},{name:'sabri'}) ******//update name 

        // Person.findByIdAndRemove({name:'sabri'}) ******  //find one and delete

        // Person.find({favoriteFoods : {$all : ['borito']}}).sort({age: 'asc'}).limit(5).select('-age').exec((error,data)=>{
        //         if(!error){
        //             console.log(data)
        //         }
        //     }) ********//Query Helpers
        // Person.remove({age :{$gte: 18}}) *******//remove all the persone grater then 18
    } 
    
    
);

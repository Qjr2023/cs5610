const {MongoClient} = require('mongodb');  
require('dotenv').config();
const uri = process.env.MongoDB_URL;
// const uri = "mongodb+srv://fang:GTAWCZfn9tPQnodj@testcs5610.r2e7l.mongodb.net/?retryWrites=true&w=majority&appName=testCS5610"
const client = new MongoClient(uri);

module.exports={
    connect: async function(){
        await client.connect();
    },
    // addToDB accepts an object to write to tasks collection in cs5610db
    addToDB: async function(doc){
        try{
            const result = await client.db("cs5610").collection("tasks").insertOne(doc);
        } catch (e){
            console.log(e);
        }
    },
    // add a function that read and returns all the data in our collection
    getAllTasks: async function(){
        try{
            const cursor = client.db("cs5610").collection("tasks").find();
            const tasks = await cursor.toArray();
            return tasks;
        } catch (e){
            console.log(e);
            return [];
        }
    }
}
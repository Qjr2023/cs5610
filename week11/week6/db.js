const {MongoClient, ObjectId} = require('mongodb');  
require('dotenv').config();
const uri = process.env.MongoDB_URI;
const client = new MongoClient(uri);

module.exports={
    connect: async function(){
        await client.connect();
    },
    // addToDB accepts an object to write to tasks collection in cs5610db
    // addToDB: async function(doc){
    //     try{
    //         const result = await client.db("cs5610").collection("tasks").insertOne(doc);
    //         return result;
    //     } catch (e){
    //         console.log(e);
    //         return {error: e};
    //     }
    // },
    // // read and returns all the data in our collection
    // getAllTasks: async function(){
    //     try{
    //         const cursor = client.db("cs5610").collection("tasks").find();
    //         const tasks = await cursor.toArray();
    //         return tasks;
    //     } catch (e){
    //         console.log(e);
    //         return [];
    //     }
    // },
    // // receives a query as a parameter and find the first document that matches the given query
    // findOneTask: async function(query){
    //     try {
    //         const task = await client.db("cs5610").collection("tasks").findOne(query);
    //         return task;
    //     } catch (e) {
    //         console.log(e);
    //         return null;
    //     }
    // }
    addToDB: async function (doc) {
        try {
          const result = await client
            .db("cs5610")
            .collection("tasks")
            .insertOne(doc);
          return result;
        } catch (err) {
          console.log("addToDB ", err);
        }
      },
      readAll: async function () {
        try {
          const cursor = await client.db("cs5610").collection("tasks").find();
          const data = await cursor.toArray();
          //    console.log(data);
          return data;
        } catch (err) {
          console.log("read all from db ", err);
        }
      },
      readOne: async function (filter) {
        try {
          const result = await client
            .db("cs5610")
            .collection("tasks")
            .findOne(filter);
    
          return result;
        } catch (err) {
          console.log("read one from db ", err);
        }
      },
      deleteOne: async function (filter) {
        try {
          const result = await client
            .db("cs5610")
            .collection("tasks")
            .deleteOne(filter);
          return result;
        } catch (err) {
          console.log("delete from db ", err);
        }
      },
}
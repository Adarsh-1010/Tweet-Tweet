
const express=require('express');
const connect=require('./config/database');
const Tweet=require('./models/tweet');

const app=express();
app.listen(3000,async()=>{
    console.log("Server Started");
    await connect();
    console.log("MongoDB connected successfully");
    // const tweet= await Tweet.create({
    //     content:"Second Tweet",
    //     userEmail:"adarsh@gmail.com"
    // });
    //  const tweets=await Tweet.find({content:"First Tweet"});
    const tweet= await Tweet.findById('6797ec518b9c909827dd8e00');
    tweet.userEmail="Sharma@123";
    await tweet.save();
    console.log(tweet);

});
const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req, res) => {
    res.send("hey");
})

// its a create user 
app.get('/create', async (req, res) => {
   let createduser = await userModel.create({
        name: "hel",
        username: "hel",
        email: "hel@gmail.com"
    })

    res.send(createduser)
})

// its a update user 
app.get('/update', async (req, res) => {
    
     let updateduser = await userModel.findOneAndUpdate({username: "hello"},
    {name: "hii"}, {new: true})
    res.send(updateduser);
})

// its read all user data 
app.get("/read",  async (req, res) => {
    let users = await userModel.find()
    res.send(users)
})

// its read one user data 
app.get("/readone",  async (req, res) => {
    let users = await userModel.findOne({username: "hel"});
    res.send(users)
})

// its delete user data 
app.get("/delete",  async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "hello"});
    res.send(users)
})





app.listen(3000);
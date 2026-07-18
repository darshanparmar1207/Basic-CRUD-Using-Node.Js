const express = require('express');
const app = express();

app.use(express.json());

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
})

// create user
app.post('/create', async (req, res) => {
    let { name, username, email } = req.body;
    let createduser = await userModel.create({ name, username, email });
    res.send(createduser);
})

// read all users
app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
})

// read one user by id
app.get("/readone/:id", async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.id });
    res.send(user);
})

// update user by id
app.post("/update/:id", async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    );
    res.send(updateduser);
})

// delete user by id
app.get("/delete/:id", async (req, res) => {
    let deleteduser = await userModel.findOneAndDelete({ _id: req.params.id });
    res.send(deleteduser);
})

app.listen(3000);
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');

const MongoDB_URI = "mongodb://127.0.0.1:27017/whatsapp";

// Connect to MongoDB
async function main() {
    await mongoose.connect(MongoDB_URI);
}

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    console.log("Fetched all the chats from the database");
    res.render("index.ejs", {chats});
})

app.get("/", (req,res) => {
    res.send("Root Working at port 8080");
})

//New Chat Route
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
})

//Create New Chat
app.post("/chats", (req,res) => {
    let {from, to, message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message
    });
    console.log("New Chat Created:", newChat);
    res.redirect("/chats");
    newChat.save().then(() => {
        console.log("New chat saved to the database");
    }).catch((err) => {
        console.error("Error saving chat to the database:", err);
    });
})

//Edit Chat Route
app.get("/chats/:id/edit", async (req,res) => {
    let id = req.params.id;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

//Edit a chat
app.put("/chats/:id", async (req,res) => {
    let id = req.params.id;
    let {message} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {message: message}, {runValidators: true});
    updatedChat.save().then((res) => {
        console.log("Chat updated successfully:", res);
    }).catch((err) => {
        console.log("Error editing the message");
    })
    res.redirect("/chats");
})

//Delete a chat
app.delete("/chats/:id", async (req,res) => {
    let id = req.params.id;
    await Chat.findByIdAndDelete(id);
    console.log("Chat deleted successfully");
    res.redirect("/chats");
})

app.listen(8080, () =>{
    console.log("Server is running on port 8080");
})
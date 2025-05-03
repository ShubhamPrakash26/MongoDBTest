const mongoose = require('mongoose');
const { Schema } = mongoose;
const chat = require("./models/chat.js");

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


let chats = [{
        from: "John",
        to: "Doe",
        message: "Hello, how are you?"
    },
    {
        from: "Jane",
        to: "Smith",
        message: "Hi, I'm good! How about you?"
    },
    {
        from: "Alice",
        to: "Bob",
        message: "Hey Bob! Are you coming to the party?"
    },
    {
        from: "Bob",
        to: "Alice",
        message: "Yes, I'll be there! Looking forward to it."
    },
    {
        from: "Charlie",
        to: "Dave",
        message: "Did you finish the project?"
    },
    {
        from: "Dave",
        to: "Charlie",
        message: "Almost done! Just need to add a few more features."
    },
    {
        from: "Eve",
        to: "Frank",
        message: "Are you free for lunch tomorrow?"
    },
    {
        from: "Frank",
        to: "Eve",
        message: "Sure! What time?"
    },
    {
        from: "Grace",
        to: "Heidi",
        message: "Let's catch up soon!"
    },
    {
        from: "Heidi",
        to: "Grace",
        message: "Definitely! It's been a while."
    },
    {
        from: "Ivan",
        to: "Judy",
        message: "I have some exciting news to share!"
    },
    {
        from: "Judy",
        to: "Ivan",
        message: "Can't wait to hear it!"
    },
    {
        from: "Mallory",
        to: "Niaj",
        message: "Are you coming to the meeting?"
    },
    {
        from: "Niaj",
        to: "Mallory",
        message: "Yes, I'll be there."
    },
    {
        from: "Oscar",
        to: "Peggy",
        message: "I need your help with something."
    },
    {
        from: "Peggy",
        to: "Oscar",
        message: "Sure! What do you need?"
    },
    {
        from: "Sybil",
        to: "Trent",
        message: "Let's plan a weekend trip!"
    },
    {
        from: "Trent",
        to: "Sybil",
        message: "Sounds like a great idea!"
    }];
chat.insertMany(chats).then((res) => {
    console.log("Messages sent successfully");
    console.log(res);
})
.catch((err) => {
    console.error("Error sending messages:", err);
});
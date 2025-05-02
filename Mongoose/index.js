const mongoose = require('mongoose');

const { Schema } = mongoose;

main().then((res) => {
    console.log("Connected to MongoDB successfully!");

})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: 'DemoUser2',
//   email: 'demouser2@gmail.com',
//   age: 26,
// });

// user1.save().then(() => {
//   console.log('User saved successfully!');
// }
// ).catch((err) => {
//   console.log('Error saving user:', err);
// }
// );

User.find().then((users) => {
    console.log(users);
}).catch((err) => {
    console.log('Error fetching users:', err);
});

const mongoose = require('mongoose');

const { Schema } = mongoose;

main().then((res) => {
    console.log("Connected to MongoDB successfully!");

})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    }
})

const Book = mongoose.model('Book', bookSchema);

// const book1 = new Book({
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     price: 10.99,
// })
// const book2 = new Book({
//     title: 'Mathematical Analysis',
//     price: 10.99,
// })
const book3 = new Book({
    title: 'New Book',
    author: 'New Author',
    price: 15.99,
})

book3.save().then((res) => {
    console.log("Book saved successfully!");
}).catch((err) => {
    console.log("Error saving book:", err);
});
const mongoose = require('mongoose');
main().then(console.log("connected!")).catch(err => console.log(err));
async function main() {
  // await mongoose.connect('mongodb://localhost:27017/websultanate');
  await mongoose.connect('mongodb+srv://rustam2536:Rust@123@cluster0.eljaq.mongodb.net/?retryWrites=true&w=majority')
}
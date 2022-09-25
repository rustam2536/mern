const mongoose = require('mongoose');
main().then(console.log("connected!")).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:6392467556@cluster0.nzstrm4.mongodb.net/websultanate');
}
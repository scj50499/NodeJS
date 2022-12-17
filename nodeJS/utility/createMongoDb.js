const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/employee";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});
const User = new mongoose.model("users", userSchema);
async function run() {
  try {
    await mongoose.connect(url);
    const docs = await User.find({});
    await docs.forEach((doc) => console.log(doc));
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}
run();

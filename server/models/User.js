import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    usertag:String,
    dob:String
});

const user = mongoose.model('users',userSchema);
export default user;
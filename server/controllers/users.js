import User from '../models/User.js';

export const getUser = (req,res)=>{
    res.send("this is user space!!");
}

export const getAll = async (req, res) => {
  
    try{
      const users= await User.find();
      res.json(users);
    }
    catch(err){
      res.json({message:err});
    }
  }

export const addUser = async (req,res)=>{
    const {usertag,dob} = req.body;

 const newuser = new User({usertag,dob});

 try{
   const useradd = await newuser.save();
   return res.json({message:"user added"});
 }
 catch(err){
  res.json({error:"user addition failed"});
 }
}

export const delUser = async (req,res)=>{
    try{
      const removeduser = await User.deleteOne({_id:req.params.userID});
      res.json(removeduser);
    }
    catch(err)
    {
      res.json({message:err});
    }
  }
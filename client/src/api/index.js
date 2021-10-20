import axios from "axios";

const url = "http://localhost:4000/users";

export const fetchUsers = ()=>axios.get(url);
export const addUser = (newUser)=>axios.post(url,newUser);
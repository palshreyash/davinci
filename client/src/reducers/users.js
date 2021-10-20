export default (users=[],action)=>{
    switch(action.type){
        case "getAll":
            return action.payload;
        case "addUser":
            return [...users, action.payload];
            default:
                return users;
    }
}
import * as api from '../api';

//action creators
export const getUsers = ()=>async(dispatch)=>{

    try{
        const {data} = await api.getUsers();
        dispatch({type:'getAll',payload:data});
    }catch(err){
        console.log(err.message);
    }

    //const action = {type:'fetchUsers',payload:[]}

}

export const addUser = ()=>async (dispatch)=>{
    try{
        const {data} = await api.addUser();
        dispatch({type:"addUser",payload:data});
    }
    catch(err){
        console.log(err);
    }
}
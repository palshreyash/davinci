import React,{useEffect,useState} from 'react'
import User from './user/user';
import useStyles from './styles';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import axios from 'axios';

const Users = () => {
const classes = useStyles();


const [displayData, setdisplayData] = useState([]);

useEffect(() => {
    axios.get("http://localhost:4000/users/all")
    .then((res)=>{
    console.log(res)
    
    let displayDataTemp = [];
    for(var index in res.data)
    {
        displayDataTemp.push(<User usertag={res.data[index].usertag}/>)
    }

    setdisplayData(displayDataTemp);
})
    .catch((err)=>(console.log(err)));
}, []);
    return (
        <>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">
                        davinci
                    </Typography>
                </AppBar>
                {displayData}
                </Container>
        </>
    );
};

export default Users;

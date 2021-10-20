import React,{useState} from 'react'
import useStyles from './styles';
import { TextField,Button,paper } from '@material-ui/core';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import axios from "axios";
import { useHistory } from "react-router-dom";

const Form = () => {
    const [userData, setUserData] = useState({
        usertag:'',dob:''
    });

    const url = "http://localhost:4000/users/add";
    let history = useHistory();

    const classes = useStyles();
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(url,userData)
        .then(res=>{console.log(res)

            NotificationManager.success('user added', 'click to view',3000, ()=>{
                history.push('/admin');
            });

        })
        .catch((err)=>{console.log(err)});
    }

    return (
        <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">
                        davinci
                    </Typography>
                </AppBar>

                <NotificationContainer/>
        <paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            <Typography variant="h6">adding a user</Typography>
            <TextField name="usertag" variant="outlined" label="usertag" fullWidth value={userData.usertag} 
            onChange={(e)=>setUserData({...userData,usertag:e.target.value})}/>
            <TextField name="dob" variant="outlined" label="dob" fullWidth value={userData.dob} 
            onChange={(e)=>setUserData({...userData,dob:e.target.value})}/>
            <Button className={classes.buttonSubmit} onClick={handleSubmit} variant="container" color="primary" type="submit" size="large">signup</Button>
            </form>
        </paper>
        </Container>
    );
};

export default Form;

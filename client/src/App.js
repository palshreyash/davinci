import React,{useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Users from './components/users/users';
import Form from './components/form/form';
import useStyles from './styles';


import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

const App = () => {
    const classes = useStyles();
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/"><Form/></Route>
        <Route exact path="/admin"><Users/></Route>
        </Switch>
        </BrowserRouter>
    );
};

export default App;
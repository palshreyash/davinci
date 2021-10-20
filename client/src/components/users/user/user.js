import { useTheme } from '@material-ui/core';
import React from 'react'
import useStyles from './styles';

const User = ({usertag}) => {
const classes = useStyles();
console.log(usertag);
    return (
        <div>
            <h1>{usertag}</h1>
        </div>
    );
};

export default User;

import React,{useState} from 'react';
import MessageField from './MessageField';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath} from '../gravatar';

const useStyles = makeStyles({
    root:{
        gridRow:2,
        margin: '26px'
    }
})
const MessageInputField =({name})=>{
    const [text,setText]=useState('');
    const classes = useStyles();
    const avatarPath = gravatarPath('goto@makersmark.co.jp');
    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar src={avatarPath}/>
                </Grid>
                <Grid item xs={10}>
                    <MessageField name={name} setText={setText} text={text}/>
                </Grid>
                <Grid item xs={1}>button</Grid>
            </Grid>
        </div>
    )
}

export default MessageInputField;
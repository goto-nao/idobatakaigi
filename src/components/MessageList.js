import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@mui/material/List';


import {messagesRef} from '../firebase';
import MessageItem from './MessageItem'

const useStyles = makeStyles({
    root:{
        width: '100%',
        overflow: 'auto',
        gridRow:1,
    }
})
const MessageList =()=>{
    const [messages,setMessages] = useState([]);
    const classes = useStyles();

    useEffect(()=>{
        messagesRef.orderByKey().limitToLast(15).on('value',(snapshot)=>{
            const messages = snapshot.val();
            if(messages === null) return;
            const entries = Object.entries(messages);
            const newMessages = entries.map((entry)=>{
                const [key,nameAndText]=entry
                return {key, ...nameAndText};
            })
            setMessages(newMessages)
        })
    },[])

    const length = messages.length;
    return(
        <List>
            {
                messages.map(({key,name,text},index) =>{
                    const isLastItem = length === index + 1;
                    return(
                        <MessageItem key={key} name={name} text={text} isLastItem={isLastItem}/>
                    )
                })
            }
        </List>
    )
}

export default MessageList;
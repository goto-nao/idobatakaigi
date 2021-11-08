import React from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import {pushMessage} from '../firebase';

const MessageSubmitButton=({name,setText,text,inputEl})=>{
    return(
        <div>
            <IconButton
            disabled={text ===''}
            onClick ={()=>{
                pushMessage({name:'なお',text})
                setText('')
                inputEl.current.focus();
            }}>
                <SendIcon />
            </IconButton>
        </div>

    )
}

export default MessageSubmitButton;
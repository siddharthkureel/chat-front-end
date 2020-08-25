import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { sendMessage } from '../../redux/actions';
import Input from './Input';


const SendMessage = ({ chatState, userId, socket }) => {
    
    const dispatch = useDispatch();
    const { chatroom } = chatState;

    //joining private chat using chatroomId as chatroom
    socket.emit('join', { userId, chatroom }, (error) => {
        if (error) {
            alert(error)
            window.location.href = '/'
        }
    });

    useEffect(() => {
        //on recieving message
        socket.on('message', ({ userId, content, chatroom, createdAt }) => {
            dispatch(sendMessage({
                chatroomId: chatroom,
                userId,
                content,
                createdAt
            }));
        });
        socket.open();
        return () => {
            //clean up the conversation from socket to switch to different conversation/chatroom
            socket.close();
        };
        //dependency array is passed so that the component update on new message
    },[dispatch, socket]);

    const handleSubmit = (e, content, setContent) => {
        e.preventDefault();
        //sending message
        socket.emit('sendMessage', {
            chatroom,
            userId,
            content,
            createdAt: Date.now() 
        }, (error) => { console.log(error) })
        //cleaning the input box
        setContent('');
    }
    return (
        <Input handleSubmit={handleSubmit}/>
    );
}

export default SendMessage;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { sendMessage } from '../../redux/actions';
import Input from './Input';

const socket = io('http://localhost:3000');

const SendMessage = ({ chatState, userId }) => {
    const dispatch = useDispatch();
    const { chatroom } = chatState;
    socket.on('connect', () => {
    });
    socket.emit('join', { userId, chatroom }, (error) => {
        if (error) {
            alert(error)
            window.location.href = '/'
        }
    })
    useEffect(() => {
        socket.on('message', ({ userId, content, chatroom, createdAt }) => {
            dispatch(sendMessage({
                chatroomId: chatroom,
                userId,
                content,
                createdAt
            }))
        })
        socket.open();
        return () => {
            socket.close();
        };
    },[]);
    const handleSubmit = (e, content, setContent) => {
        e.preventDefault()
        socket.emit('sendMessage', {
            chatroom,
            userId,
            content,
            createdAt: Date.now() 
        }, (error) => { console.log(error) })
        setContent('')
    }
    return (
        <Input handleSubmit={handleSubmit}/>
    );
}

export default SendMessage;

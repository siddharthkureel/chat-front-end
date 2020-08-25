import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import UserList from './UserList';
import Chat from './Chat';
import { chatroom, getClients } from '../../redux/actions';

const useStyles = () =>{
    return {
        container : { height: '100vh', display: 'grid', backgroundColor: '#f5f5f591' },
        row: { justifyContent: 'center', alignContent: 'center', marginTop: '20px' },
        profile: { margin: 'auto', display: 'inherit' },
        span: {
            border: '10px powderblue solid',
            color: 'white',
            background: 'powderblue',
            borderRadius: '50%',
            padding: '0 21px',
            fontWeight: 'bolder',
            fontSize: 'xxx-large',
        }
    }
}

const Dashboard = () => {
    const dispatch = useDispatch();
    const styles = useStyles();
    const socket = io('http://localhost:3000');
    let user = useSelector((state)=>(state.userState.user));
    const name = user.name
    const initial = name.charAt(0);

    const [status, setStatus] = useState(false);

    socket.emit('active', { userId: user._id }, () => { setStatus(true) });

    //getting clients list from server 
    //partnerId is stated when user is client otherwise null if user is partner
    dispatch(getClients({
        id: user._id, 
        type: user.type,
        partnerId: user?.partnerId
    }))

    //when the conversation/chatroom is clicked to view the conversation between two user
    const handleClient = (clientId) => {
        //check is required as database stored userA and userB in chatroom 
        //chatroom table is searched through database userA and userB to get chatroomId
        //userA and userB is unique and is not interchangable so the switch is required
        if(user.type==='client'){
            dispatch(chatroom({
                userA: clientId,
                userB: user._id
            }))
        }
        if(user.type==='partner'){
            dispatch(chatroom({
                userA: user._id,
                userB: clientId
            }))
        }
    }
    return (
        <div className="container" style={styles.container}>
            <div style={styles.profile} >
                <span style={styles.span} >{initial.toUpperCase()}</span>
                <span>
                    {
                        status ? 
                        'connected' :
                        'disconnected'
                    }
                </span>
            </div>
            <div className="row" style={styles.row}>
                <UserList  handleClient={handleClient} />
                <Chat socket={socket}/>
            </div>
        </div>
    );
}

export default Dashboard;

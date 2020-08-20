import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserList from './UserList';
import Chat from './Chat';
import { chatroom } from '../../redux/actions';

const useStyles = () =>{
    return {
        container : { height: '100vh', display: 'grid', backgroundColor: '#f5f5f591' },
        row: { justifyContent: 'center', alignContent: 'center', marginTop: '20px' }
    }
}

const Dashboard = () => {

    let user = useSelector((state)=>(state.userState.user));
    const dispatch = useDispatch();
    const styles = useStyles();
    const handleClient = (clientId) => {
        if(user.type==='client'){
            dispatch(chatroom({
                userId: clientId,
                clientId: user.linkId
            }))
        }else{
            dispatch(chatroom({
                userId: user.id,
                clientId
            }))
        }

    }
    return (
        <div className="container" style={styles.container}>
            <div className="row" style={styles.row}>
                <UserList  handleClient={handleClient} />
                <Chat/>
            </div>
        </div>
    );
}

export default Dashboard;

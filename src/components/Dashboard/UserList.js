import React from 'react';
import { useSelector } from 'react-redux';

import Card from './Card';

const useStyles = () =>{
    return {
        container : { height: '80vh', display: 'grid', backgroundColor: '#f5f5f591' },
        row: { justifyContent: 'center', alignContent: 'center' }
    }
}

const UserList = ({ handleClient }) => {
    const styles = useStyles()
    const { clients } = useSelector(state=>state.userState)
    return (
        <div className="col-md-4" style={styles.container}>
            {
                clients.map(client=>(
                    <Card key={client.id} client={client} handleClient={handleClient} />
                ))
            }
        </div>
    );
}


export default UserList;

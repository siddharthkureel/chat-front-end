import React from 'react';
import moment from 'moment';

const Card = ({ client, handleClient }) => (
    <div className="grid-item col-md-12" onClick={() => handleClient(client._id)}>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{client.name}</h5>
                <h6 className="card-link">{client.username}</h6>
                <i>{client.active === true ? 'online' : moment(client.lastSeen).calendar()}</i>
            </div>
        </div>
    </div>
)

export default Card;

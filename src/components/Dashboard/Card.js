import React from 'react';

const Card = ({ client, handleClient }) => (
    <div className="grid-item col-md-12" onClick={()=>handleClient(client.id)}>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{client.name}</h5>
                <h6 className="card-link">{client.username}</h6>
            </div>
        </div>
    </div>
)

export default Card;

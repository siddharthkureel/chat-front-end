import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PublicRoutes  = ({
    loggedIn,
    component: Comp,
    ...rest
}) => {
    return <Route {...rest} component={(props)=>(
        rest.restricted ?
            ( loggedIn ?
                <Redirect to="/dashboard"/>
                :
                <Comp {...props}/>
            )
        :
        <Comp {...props}/>
    )}/>
};

export default PublicRoutes;
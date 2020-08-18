import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoutes = ({
    loggedIn,
    component: Comp,
    ...rest
}) => {
    return <Route {...rest} component={(props)=>(
        loggedIn ? 
        <Comp {...props}/>
        :
        <Redirect to="/"/>
    )}/>
};

export default PrivateRoutes;
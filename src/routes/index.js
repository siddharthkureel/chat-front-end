import React from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Signin from '../components/Signin'
import Dashboard from '../components/Dashboard';

const Routes = () => {
    const loggedIn = useSelector(state=> state.userState.loggedIn);
    return (
        <Switch>
            <PrivateRoutes loggedIn={loggedIn} path="/dashboard" exact component={Dashboard} />
            <PublicRoutes loggedIn={loggedIn} restricted={true}  path="/" exact component={Signin} />
        </Switch>
    )
}

export default Routes
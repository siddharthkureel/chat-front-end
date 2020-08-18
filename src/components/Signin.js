import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

import { signin } from '../redux/actions';

const useStyles = () =>{
    return {
        container : { height: '100vh', display: 'grid' },
        row: { justifyContent: 'center', alignContent: 'center' }
    }
}


const Signin = () => {
    const styles = useStyles();
    const dispatch = useDispatch();
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signin({
            username,
            password
        }))
    }
    return (
    <MDBContainer style={styles.container}>
        <MDBRow style={styles.row}>
            <MDBCol md="6">
            <form onSubmit={(e)=>handleSubmit(e)} >
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                <MDBInput onChange={(e) =>setUsername(e.target.value)} value={username} label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                    error="wrong" success="right" />
                <MDBInput onChange={(e) =>setPassword(e.target.value)} value={password}  label="Your password" icon="lock" group type="password" validate />
                </div>
                <div className="text-center">
                <MDBBtn type="submit" color="primary">SignIn</MDBBtn>
                </div>
            </form>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    );
};

export default Signin;
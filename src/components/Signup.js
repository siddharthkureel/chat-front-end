import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBFormInline } from 'mdbreact';

import { signup } from '../redux/actions';

const useStyles = () =>{
    return {
        container : { height: '100vh', display: 'grid' },
        row: { justifyContent: 'center', alignContent: 'center' },
        form: { display: 'block' },
        inputContainer: { display: 'flex', justifyContent: 'center' },
        input: { margin: '0 10px' }
    }
}

const Signin = () => {
    const styles = useStyles();
    const dispatch = useDispatch();
    
    const [fields, setFields] = useState({
        name: '',
        username: '',
        password: '',
        type: 'client'
    })
    const [partner, setPartner] = useState('')
    const setChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(fields.type === 'client'){
            dispatch(signup({ ...fields, partner }))
        } else {
            dispatch(signup({ ...fields }))
        }
    }
    return (
    <MDBContainer style={styles.container}>
        <MDBRow style={styles.row}>
            <MDBCol md="6">
                <MDBFormInline onSubmit={(e) => handleSubmit(e)} style={styles.form} >
                    <MDBInput onChange={(e) => setChange(e)} value={fields.name} label="Confirm your name" icon="user" group type="text" required
                        error="wrong" success="right" name='name' />
                    <MDBInput onChange={(e) => setChange(e)} value={fields.username} label="Confirm your email" icon="at" group type="text" required
                        error="wrong" success="right" name='username'  />
                    <MDBInput onChange={(e) => setChange(e)} name='password' value={fields.password}  label="Your password" icon="lock" group type="password" required />
                    <div style={styles.inputContainer} >
                    <MDBInput
                        style={styles.input}
                        label='client'
                        type='radio'
                        valueDefault={'client'}
                        name='type'
                        value='client'
                        onChange={(e) => setChange(e)}
                    />
                    <MDBInput
                        style={styles.input}
                        label='partner'
                        type='radio'
                        name='type'
                        onChange={(e) => setChange(e)}
                        value='partner'
                    />
                    </div>
                    {
                        fields.type === 'partner' ?
                        '' :
                        <MDBInput onChange={(e) => setPartner (e.target.value)} value={partner} label="Confirm your partner email" icon="user" group type="text" required name='name' />
                    }
                    <Link to='/'>SignIn</Link>
                    <MDBBtn type="submit" color="primary">SignUp</MDBBtn>
                </MDBFormInline>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    );
};

export default Signin;
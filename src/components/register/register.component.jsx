import { Fragment } from 'react';
import Logo from '../logo/logo.component';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/user/user.context';
import FormInput from '../form-input/form-input.component';

const Register = () => {

    const nav = useNavigate();
    const initialState = {
        username: '',
        email: '',
        password: '',
    }
    const {setCurrentUser} = useContext(UserContext);
    const [user, setUser] = useState(initialState);

    const onUserChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            username: event.target.value,
        }));
    }

    const onEmailChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            email: event.target.value,
        }));
    }

    const onPasswordChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            password: event.target.value,
        }));
    }

    const onRegister = () => {
        fetch(`http://localhost:3000/register`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                name: user.username
            })
        })
        .then(response => response.json()
        .then(user => {
            if (user) {
                setCurrentUser(user);
                nav('/');
            }
        })).catch(err => console.log(err));
    }

    return( 
        <Fragment>
            <Logo/>
            <div className='bg-white signup-box center shadow-3 br3 mt4 pv3 bg-washed-green' style={{ width: '400px' }}>
                <div className='mh3'>
                    <h1 className='tc'>Register</h1>
                    <FormInput
                        label= "Username:"
                        inputOptions={{
                            placeholder: 'username',
                            type: 'text', 
                            name: 'username',
                            id: 'username',
                            onChange:onUserChange
                        }}
                    />
                    <FormInput
                        label="Email"
                        inputOptions={{
                            placeholder:'sample@email.com',
                            type:'email', 
                            name:'email',
                            id:'email',
                            onChange:onEmailChange
                        }}
                    />
                    <FormInput
                        label="Password:"
                        inputOptions={{
                            placeholder: 'password',
                            type: 'password',
                            name: 'password',
                            id: 'password',
                            onChange: onPasswordChange
                        }}
                    />
                    <div className='tc bt'>
                        <button 
                            className='mt2 white bg-dark-green grow ph3 pv2 pointer f4'
                            onClick={ onRegister }
                        >
                            Register
                        </button>
                        <p 
                            className='link dim grow f4 pointer'
                            onClick={ () => { nav('/signin') } }
                        >
                            Sign In
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Register;
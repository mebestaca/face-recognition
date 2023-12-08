import { Fragment } from 'react';
import Logo from '../logo/Logo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/user/user.context';

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
                <div>
                    <h1 className='tc'>Register</h1>
                    <div className='flex pv2'>
                        <label className='f4 ph3 w-30'>Username:</label>
                        <input 
                            className='f4 w-70' 
                            type='text' 
                            placeholder='username'
                            name='username'
                            id='username'
                            onChange={ onUserChange }
                        >
                        </input>
                    </div>
                    <div className='flex pv2'>
                        <label className='f4 ph3 w-30'>Email:</label>
                        <input 
                            className='f4 w-70' 
                            type='email' 
                            placeholder='sample@email.com'
                            name='email'
                            id='email'
                            onChange={ onEmailChange }
                        >
                        </input>
                    </div>
                    <div className='flex pv2'>
                        <label className='f4 ph3 w-30'>Password:</label>
                        <input 
                            className='f4 w-70' 
                            type='password' 
                            placeholder='password'
                            name='password'
                            id='password'
                            onChange={ onPasswordChange }
                        >
                        </input>
                    </div>
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
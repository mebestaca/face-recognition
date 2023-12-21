import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/user/user.context';
import Logo from '../logo/logo.component';
import FormInput from '../form-input/form-input.component';
import ErrorMessage from '../error/error.component';

const Register = () => {
    const nav = useNavigate();
    const initialState = {
        username: '',
        email: '',
        password: '',
    }
    const [user, setUser] = useState(initialState);
    const {setCurrentUser} = useContext(UserContext);
    const [errorList, setErrorList] = useState([]);

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
        const errors = [];

        if (!user.username) {
            errors.push("Username cannot be null");
        }

        if (user.username.length < 6) {
            errors.push("Username must be longer than 6 characters");
        }

        if (user.username.length > 100) {
            errors.push("Username must not exceed 100 characters");
        }

        if (!user.email) {
            errors.push("Email cannot be null");
        }

        if (!user.email.includes('@')) {
            errors.push("Incorrect email format");
        }

        if (!user.password) {
            errors.push("Password cannot be null");
        }

        if (errors.length > 0) {
            setErrorList(errors);
            return;
        }

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
            if (user.id) {
                setCurrentUser(user);
                nav('/');
            }
        })).catch(err => console.log(err));
    }

    return( 
        <>
            <Logo/>
            <div className='bg-white signup-box center shadow-3 br3 mt4 pv3 bg-washed-green' style={{ width: '400px' }}>
                <div className='mh3'>
                    <h1 className='tc'>Register</h1>

                    {
                        errorList.length > 0 ? <ErrorMessage errorMessages={errorList} /> : <></>
                    }
                    
                    <FormInput
                        label= "Username:"
                        inputOptions={{
                            placeholder: 'username',
                            type: 'text', 
                            name: 'username',
                            id: 'username',
                            required: true,
                            minLength: '6',
                            maxLength: '100',
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
                            minLength: '3',
                            required: true,
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
                            minLength: '6',
                            required: true,
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
        </>
    );
}

export default Register;
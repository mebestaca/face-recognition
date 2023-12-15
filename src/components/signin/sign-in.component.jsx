import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/user/user.context';
import Logo from '../logo/logo.component';
import FormInput from '../form-input/form-input.component';
import ErrorMessage from '../error/error.component';

const SignIn = () => {
    const nav = useNavigate();
    const initialState = {
        password: '',
        email: '',
    }
    const [user, setUser] = useState(initialState);
    const {setCurrentUser} = useContext(UserContext);
    const [errorList, setErrorList] = useState([]);

    const onEmailChange = (event) => {

        setUser((prevState) => ({
            ...prevState,
            email: event.target.value
        }));
    }

    const onPasswordChange = (event) => {

        setUser((prevState) => ({
            ...prevState,
            password: event.target.value,
        }));
    }

    const onSubmitCredentials = () => {
        const errors = [];

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

        fetch(`http://localhost:3000/signin`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                setCurrentUser(user);
                nav('/');
            }
        });
    }

    return (
        <>
            <Logo/>
            <div className='bg-white signup-box center shadow-3 br3 mt4 pv3 bg-washed-green' style={{ width: '400px' }}>
                <div className='mh3'>
                    <h1 className='tc'>Sign In</h1>

                    {
                        errorList.length > 0 ? <ErrorMessage errorMessages={errorList} /> : <></>
                    }

                    <FormInput 
                        label="Email:"
                        inputOptions={{
                            placeholder:'sample@email',
                            type:'email',
                            name:"email" ,
                            id:"email",  
                            minLength: '3',
                            required: true,
                            onChange:onEmailChange 
                        }}
                    
                    />
                    <FormInput 
                        label="Password:"
                        inputOptions={{
                            placeholder:'password',
                            type:'password',
                            name:"password" ,
                            id:"password", 
                            minLength: '6',
                            required: true,
                            onChange:onPasswordChange 
                        }}
                    />
                    <div className='tc bt'>
                        <button 
                            className='mt2 white bg-dark-green grow ph3 pv2 pointer f4'
                            onClick={ onSubmitCredentials }
                        >
                                Sign In
                        </button>
                        <p 
                            className='link dim grow f4 pointer'
                            onClick={ () => { nav('/register') } }
                        >
                            Register
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
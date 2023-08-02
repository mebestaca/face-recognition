import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    onSubmitCredentials = () => {
        fetch(`http://localhost:3000/signin`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        });
    }

    render() {
        return (
            <div className='bg-white signup-box center shadow-3 br3 mt4 pv3 bg-washed-green' style={{ width: '400px' }}>
                <div>
                    <h1 className='tc'>Sign In</h1>
                    <div className='flex pv2'>
                        <label className='f4 ph3 w-30'>Email:</label>
                        <input 
                            className='f4 w-70'
                            placeholder='sample@email'
                            type='email'
                            name="email" 
                            id="email"  
                            onChange={ this.onEmailChange }
                        ></input>
                    </div>
                    <div className='flex pv2'>
                        <label className='f4 ph3 w-30'>Password:</label>
                        <input 
                            className='f4 w-70' 
                            placeholder='password'
                            type='password' 
                            name="password"
                            id="password"
                            onChange={ this.onPasswordChange }
                        ></input>
                    </div>
                    <div className='tc bt'>
                        <button 
                            className='mt2 white bg-dark-green grow ph3 pv2 pointer f4'
                            onClick={ this.onSubmitCredentials }
                        >
                                Sign In
                        </button>
                        <p 
                            className='link dim grow f4 pointer'
                            onClick={ ()=> { this.props.onRouteChange('register')}}
                        >
                            Register
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
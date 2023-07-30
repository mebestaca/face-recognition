import React, { Component } from 'react';

class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: '',
            password: '',
        }
    }

    onUserChange = (event) => {
        this.setState({
            user: event.target.value
        });
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

    onRegister = () => {
        fetch(`http://localhost:3000/register`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.user
            })
        })
        .then(response => response.json()
        .then(user => {
            if (user) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        }));
    }

    render() {
        return (
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
                            onChange={ this.onUserChange }
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
                            onChange={ this.onEmailChange }
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
                            onChange={ this.onPasswordChange }
                        >
                        </input>
                    </div>
                    <div className='tc bt'>
                        <button 
                            className='mt2 white bg-dark-green grow ph3 pv2 pointer f4'
                            onClick={ this.onRegister }
                        >
                            Register
                        </button>
                        <p 
                            className='link dim grow f4 pointer'
                            onClick={ () => { this.props.onRouteChange('signin') } }
                        >
                            Sign In
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
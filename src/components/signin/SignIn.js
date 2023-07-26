import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component { 
    render() {
        return (
            <div className='bg-white signup-box center shadow-3 br3 mt4 pv3 bg-washed-green' style={{ width: '400px' }}>
                <div>
                    <h1 className='tc'>Sign In</h1>
                    <div className='flex pv2'>
                        <label className='f4 ph3 w-30'>Username:</label>
                        <input className='f4 w-70' type='text' placeholder='username'></input>
                    </div>
                    <div className='flex pv2'>
                        <label className='f4 ph3 w-30'>Password:</label>
                        <input className='f4 w-70' type='password' placeholder='password'></input>
                    </div>
                    <div className='tc bt'>
                        <button 
                            className='mt2 white bg-dark-green grow ph3 pv2 pointer f4'
                            onClick={ ()=> { this.props.onRouteChange('home') }  }
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
import { Fragment } from 'react';
import Logo from '../logo/Logo';

const Register = () => {
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
                            onChange={ null }
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
                            onChange={ null }
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
                            onChange={ null }
                        >
                        </input>
                    </div>
                    <div className='tc bt'>
                        <button 
                            className='mt2 white bg-dark-green grow ph3 pv2 pointer f4'
                            onClick={ null }
                        >
                            Register
                        </button>
                        <p 
                            className='link dim grow f4 pointer'
                            onClick={ null }
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
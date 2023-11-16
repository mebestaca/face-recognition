import { Fragment } from 'react';
import Logo from '../logo/Logo';
import FormInput from '../form-input/form-input.component';

const SignIn = () => {
    return (
        <Fragment>
            <Logo/>
            <div className='bg-white signup-box center shadow-3 br3 mt4 pv3 bg-washed-green' style={{ width: '400px' }}>
                <div>
                    <h1 className='tc'>Sign In</h1>
                    <FormInput 
                        label="Email:"
                        inputOptions={{
                            placeholder:'sample@email',
                            type:'email',
                            name:"email" ,
                            id:"email",  
                            onChange:null 
                        }}
                    
                    />
                    <FormInput 
                        label="Email:"
                        inputOptions={{
                            placeholder:'password',
                            type:'password',
                            name:"password" ,
                            id:"password",  
                            onChange:null 
                        }}
                    />
                    <div className='tc bt'>
                        <button 
                            className='mt2 white bg-dark-green grow ph3 pv2 pointer f4'
                            onClick={ null }
                        >
                                Sign In
                        </button>
                        <p 
                            className='link dim grow f4 pointer'
                            onClick={ null }
                        >
                            Register
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SignIn;
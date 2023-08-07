import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            this.props.isSignedIn ?
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p 
                    className='underline pa2 ma3 link dim pointer f3 grow'
                    onClick= { () => { this.props.onRouteChange('signin') } }
                >
                    Sign Out
                </p>
            </nav> :
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p 
                    className='underline pa2 ma3 link dim pointer f3 grow'
                    onClick= { () => { this.props.onRouteChange('signin') } }
                >
                    Sign In
                </p>
                <p  
                    className='underline pa2 ma3 link dim pointer f3 grow'
                    onClick={ () => { this.props.onRouteChange('register') } }
                >
                    Register
                </p>
           </nav>
        );
    }
}

export default Navigation;
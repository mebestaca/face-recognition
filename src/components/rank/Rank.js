import React, { Component } from 'react';
import './Rank.css';

class Rank extends Component {
    render() {
        return (
            <div>
                <div className='rank-box'>
                    <p className='f3'>{ `${this.props.name}, your current entry count is:` }</p>
                </div>
                <div className='rank-box'>
                    <p className='f1 mt0 mb0'>{ `${this.props.entries}` }</p>
                </div>
            </div>
        );
    }
}

export default Rank;
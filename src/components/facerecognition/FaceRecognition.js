import React, { Component } from 'react';
import Rectangle from '../rectangles/Rectangle';

class FaceRecognition extends Component {
    
    render() {
        const rectangle = this.props.rectangle;
                
        return (
            <div className='face-component-box'>
                <div className='absolute mt2'>
                    <img id='inputImage'
                        width='500px' 
                        height='auto' 
                        alt=''
                        src= {this.props.imageUrl} />
                    {
                        rectangle.map((m, i) => <Rectangle key={i} coordinates={m} />)
                    }
                </div>
            </div>
        );
    }
}

export default FaceRecognition;
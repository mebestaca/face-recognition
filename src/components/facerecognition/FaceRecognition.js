import React, { Component } from 'react';
import './FaceRecognition.css';

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
                    <div className='bounding-box'
                        style={{ 
                            top: rectangle.topRow,
                            right: rectangle.rightCol,
                            bottom: rectangle.bottomRow,
                            left: rectangle.leftCol
                        }}>
                    </div>
                </div>
            </div>
        );
    }
}

export default FaceRecognition;
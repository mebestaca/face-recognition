import { Component } from "react";
import './Rectangle.css';

class Rectangle extends Component {
    render() {
        const region = this.props.coordinates;
        return (
            <div className='bounding-box'
                style={{ 
                    top: region.topRow,
                    right: region.rightCol,
                    bottom: region.bottomRow,
                    left: region.leftCol
                }}>
            </div> 
        );
    }
}

export default Rectangle;
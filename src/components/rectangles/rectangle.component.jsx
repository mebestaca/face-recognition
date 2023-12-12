import './rectangle.style.css';

const Rectangle = ({coordinates}) => {
    return (
        <div className='bounding-box'
            style={{ 
                top: coordinates.topRow,
                right: coordinates.rightCol,
                bottom: coordinates.bottomRow,
                left: coordinates.leftCol
            }}>
        </div> 
    );
}

export default Rectangle;
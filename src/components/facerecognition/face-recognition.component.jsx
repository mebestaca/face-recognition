import Rectangle from "../rectangles/Rectangle";

const FaceRecognition = () => {
    const rectangle = [];
    const imageUrl = "";
            
    return (
        <div className='face-component-box'>
            <div className='absolute mt2'>
                <img id='inputImage'
                    width='500px' 
                    height='auto' 
                    alt=''
                    src= {imageUrl} />
                {
                    rectangle.map((m, i) => <Rectangle key={i} coordinates={m} />)
                }
            </div>
        </div>
    );
}

export default FaceRecognition;
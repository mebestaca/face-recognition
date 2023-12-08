import Rectangle from "../rectangles/Rectangle";
import { useContext } from "react";
import { ImageContext } from "../../context/image/image.context";


const FaceRecognition = () => {
    const { imageUrl, rectangles } = useContext(ImageContext);

    return (
        <div className='face-component-box'>
            <div className='absolute mt2'>
                <img id='inputImage'
                    width='500px' 
                    height='auto' 
                    alt=''
                    src= {imageUrl} />
                {
                    rectangles.map((m, i) => <Rectangle key={i} coordinates={m} />)
                }
            </div>
        </div>
    );
}

export default FaceRecognition;
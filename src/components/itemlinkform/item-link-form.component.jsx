import './item-link-form.style.css';
import { useContext } from 'react';
import { ImageContext } from '../../context/image/image.context';
import { UserContext } from '../../context/user/user.context'; 

const ItemLinkForm = () => {

    const { imageUrl, setImageUrl,  setRectangles } = useContext(ImageContext);
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const onInputChange = (event) => {
        setRectangles([]);
        setImageUrl(event.target.value);
    }

    const drawRectangle = (coordinates) => {
        setRectangles(coordinates);
    }

    const getRectangle = (data) => {
        const regions = data.outputs[0].data.regions.length;
        
        let rectangles = [];
        for (let i = 0; i < regions; i++){
          const face = data.outputs[0].data.regions[i].region_info.bounding_box;
          const image = document.getElementById('inputImage');
          const width = Number(image.width);
          const height = Number(image.height);
          rectangles.push({
            leftCol: face.left_col * width,
            topRow: face.top_row * height,
            rightCol: width - (face.right_col * width),
            bottomRow: height - (face.bottom_row * height)
          });
        }
        return rectangles;
    }

    const onSubmitImage = () => {
        detectImage();
        incrementEntry();
    }

    const incrementEntry = () => {
        fetch(process.env.REACT_APP_API_URL_IMAGE, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            id: currentUser.id
            })
        })
        .then(response => response.json())
        .then(count => {
            setCurrentUser({ ...currentUser, entries: count });
        })
        .catch(console.log);
    }
    
    const detectImage = () => {
        fetch(process.env.REACT_APP_API_URL_IMAGE_DETECT, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                imageUrl: imageUrl
            })
        })
        .then(response => response.json())
        .then(result =>  drawRectangle(getRectangle(result))) 
        .catch(console.log);
    }

    return (
        <div>
            <p className='item-link-box'>{ `This app can detect people's faces. Give it a try!` }</p>
            <div className='item-link-box'>
                <div className='pa4 br3 shadow-5 item-link-box bg-washed-green'>
                    <input 
                        style={{ width: '300px' }} 
                        className='pa2 f4 w-70' 
                        type='text' 
                        placeholder='url'
                        maxLength={200}
                        onChange={ onInputChange }/>
                    <button 
                        className='white bg-dark-green w-30 grow ph3 pv2 pointer f4'
                        onClick={ onSubmitImage }>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ItemLinkForm;
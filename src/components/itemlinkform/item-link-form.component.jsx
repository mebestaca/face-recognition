import './ItemLinkForm.css';
import { useContext } from 'react';
import { ImageContext } from '../../context/image/image.context';
import { UserContext } from '../../context/user/user.context'; 

const ItemLinkForm = () => {

    const { setImageUrl, imageUrl, setRectangles } = useContext(ImageContext);
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const onInputChange = (event) => {
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
        fetch(`http://localhost:3000/image`, {
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
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        // In this section, we set the user authentication, user and app ID, model details, and the URL
        // of the image we want as an input. Change these strings to run your own example.
        //////////////////////////////////////////////////////////////////////////////////////////////////

        // Your PAT (Personal Access Token) can be found in the portal under Authentification
        const PAT = '9a1c86d08e8841ebae2d7571f88f058b';
        // Specify the correct user_id/app_id pairings
        // Since you're making inferences outside your app's scope
        const USER_ID = 'mebestaca';       
        const APP_ID = 'face-detection';
        // Change these to whatever model and image URL you want to use
        const MODEL_ID = 'face-detection';
        const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';  
        const IMAGE_URL = imageUrl;

        ///////////////////////////////////////////////////////////////////////////////////
        // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
        ///////////////////////////////////////////////////////////////////////////////////

        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": IMAGE_URL
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + PAT
            },
            body: raw
        };

        // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
        // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
        // this will default to the latest version_id

        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
            .then(response => response.json())
            .then(result => drawRectangle(getRectangle(result)))
            .catch(error => console.log('error', error));
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
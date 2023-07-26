import Navigation from './components/navigation/Navigation';
import ParticlesBg from 'particles-bg'
import Logo from './components/logo/Logo';
import SignIn from './components/signin/SignIn';
import Register from './components/register/Register';
import ItemLinkForm from './components/itemlinkform/ItemLinkForm';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      rectangle: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({
      url: event.target.value
    });
  }

  getRectangle = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }

  drawRectangle = (coordinates) => {
    this.setState({ rectangle: coordinates});
  }

  onRouteChange = (route) => {
    console.log(route);
    route === 'home' ? this.setState({ isSignedIn: true}) : this.setState({ isSignedIn: false });
    this.setState({route: route});
  }

  onButtonClick = () => {
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
    const IMAGE_URL = this.state.url;

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
        .then(result => this.drawRectangle(this.getRectangle(result)))
        .catch(error => console.log('error', error));
  }

  render() {
    const { url, rectangle, route, isSignedIn } = this.state;

    return (
      <div >
        <ParticlesBg type='cobweb' num={150} bg={true} />
        <Navigation isSignedIn= { isSignedIn } onRouteChange= { this.onRouteChange } />
        <Logo />
        {
          (() => {
            if (route === 'signin') {
              return (
                <SignIn onRouteChange={ this.onRouteChange } />
              );
            }
            else if (route === 'register') {
              return (
                <Register onRouteChange={ this.onRouteChange } />
              );
            }
            else {
              return (
                <div>
                  <ItemLinkForm onInputChange={ this.onInputChange } onButtonClick={ this.onButtonClick } />
                  <FaceRecognition imageUrl= { url} rectangle={ rectangle }/>
                </div>
              );
            }
          })()
        }
      </div>
    );
  }
}

export default App;

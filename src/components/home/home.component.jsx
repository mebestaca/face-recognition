import Logo from '../logo/logo.component';
import Rank from '../rank/rank.component';
import ItemLinkForm from '../itemlinkform/item-link-form.component';
import FaceRecognition from '../facerecognition/face-recognition.component';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Rank/>
            <ItemLinkForm/>
            <FaceRecognition />
        </div>
    );
}

export default Home;
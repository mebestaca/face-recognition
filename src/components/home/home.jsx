import Logo from '../logo/Logo';
import Rank from '../rank/rank.component';
import FaceRecognition from '../facerecognition/face-recognition.component';
import ItemLinkForm from '../itemlinkform/item-link-form.component';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Rank/>
            <ItemLinkForm/>
        </div>
    );
}

export default Home;
import { Route, Routes  } from "react-router-dom";
import Navigation from './components/navigation/navigation.component';
import ParticlesBg from "particles-bg";
import Logo from './components/logo/Logo';
import Home from "./components/home/home";
// import Register from "./components/register/Register";
import SignIn from "./components/signin/sign-in.component";
import Register from "./components/register/register.component";

const App2 = () => {
    return (
        <div>
            <ParticlesBg type='cobweb' num={150} bg={true} />
            <Routes>
                <Route path='/' element={ <Navigation/> } >
                    <Route index element={ <SignIn/>  } />
                </Route>
            </Routes>
        </div>
        
    );
}

export default App2;
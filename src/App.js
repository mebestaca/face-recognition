import { Route, Routes  } from "react-router-dom";
import Navigation from './components/navigation/navigation.component';
import ParticlesBg from "particles-bg";
import Home from "./components/home/home.component";
import SignIn from "./components/signin/sign-in.component";
import Register from "./components/register/register.component";
import PrivateRoute from "./components/private-route/private-route.component";

const App2 = () => {
    return (
        <div>
            <ParticlesBg type='cobweb' num={150} bg={true} />
            <Routes>
                <Route path='/' element={ <Navigation/> } >
                    <Route index element={ 
                        <PrivateRoute>
                            <Home/>  
                        </PrivateRoute>
                    } />
                    <Route path='signin' element={ <SignIn/> } />
                    <Route path='register' element={ <Register/> } />
                </Route>
            </Routes>
        </div>
        
    );
}

export default App2;
import { Fragment } from "react"
import NavigationButton from "../navigation-button/navigation-button.component";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user/user.context";
import { ImageContext } from "../../context/image.context.jsx/image.context";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { setImageUrl, setRectangles } = useContext(ImageContext);
    const nav = useNavigate();
    return (
        <Fragment>
            <div>
            {
                currentUser ? 
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <NavigationButton caption={"Sign Out"} 
                        onclick={ () => { 
                            setCurrentUser(null);
                            setImageUrl(null);
                            setRectangles([]);
                            nav('/signin');
                        }}
                    />
                </nav>
                :
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <NavigationButton caption={"Sign In"} 
                        onclick={ () => { nav('/signin')}}
                    />
                    <NavigationButton caption={"Register"} 
                        onclick={ () => { nav('/register') } }
                    />
                </nav>
            }
            </div>
            <Outlet/>
        </Fragment>
    )
};

export default Navigation;
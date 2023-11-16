import { Fragment } from "react"
import NavigationButton from "../navigation-button/navigation-button.component";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    const isSignedIn = false;
    return (
        <Fragment>
            <div>
            {
                isSignedIn ? 
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <NavigationButton caption={"Sign Out"} />
                </nav>
                :
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <NavigationButton caption={"Sign In"} />
                    <NavigationButton caption={"Register"} />
                </nav>
            }
            </div>
            <Outlet/>
        </Fragment>
    )
};

export default Navigation;
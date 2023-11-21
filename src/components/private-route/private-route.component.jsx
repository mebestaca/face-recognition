import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const isLoggedIn = false;
    return isLoggedIn ? children : <Navigate to='/signin' />
}

export default PrivateRoute;
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user/user.context";

const PrivateRoute = ({ children }) => {
    const {currentUser} = useContext(UserContext);
    return currentUser ? children : <Navigate to='/signin' />
}

export default PrivateRoute;
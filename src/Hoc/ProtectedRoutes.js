import { Navigate } from 'react-router-dom';

const ProtectedRoutes = (props) => {
    const name = localStorage.getItem("userData");
    const data = JSON.parse(name);

    if (data === null) {
        return <Navigate to='/' replace />
    }
    return props.children
}

export default ProtectedRoutes;
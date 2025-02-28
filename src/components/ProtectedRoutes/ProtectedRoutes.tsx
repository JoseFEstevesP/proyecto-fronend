import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ContextToken } from '../../context/token/TokenContext';

const ProtectedRoutes = () => {
	const { token } = useContext(ContextToken);

	return token ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;

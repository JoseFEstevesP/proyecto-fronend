import { lazy, Suspense } from 'react';
import Loader from '../../components/loader/Loader';
import Restricted from '../../components/restricted/Restricted';

const UserAdmin = lazy(() => import('../UserAdminRoutes'));
// const UserDefault = lazy(() => import('../userDefault/UserDefault'));

const UserValOptions = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				{/* <Restricted typeRol={'user'}>
					<UserDefault />
				</Restricted> */}
				<Restricted typeRol={'admin'}>
					<UserAdmin />
				</Restricted>
			</Suspense>
		</>
	);
};

export default UserValOptions;

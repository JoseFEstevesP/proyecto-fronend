import { lazy, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from '../components/loader/Loader';
import { MenuItem } from '../components/menu/menuType';
import Restricted from '../components/restricted/Restricted';
import useValidate from '../hooks/useValidate';
import DefaultPage from '../layout/defaultPage/DefaultPage';
import Error404 from './error/404/Error404';
import Init from './init/Init';
import { Permission } from './rol/enum/enum';
import Profile from './user/profile/Profile';

// Manejo de usuario

const UserOptionsAdmin = lazy(() => import('./user/admin/UserOptionsAdmin'));
const RegisterUserAdmin = lazy(() => import('./user/admin/RegisterUserAdmin'));
const UpdateUserAdmin = lazy(() => import('./user/admin/UpdateUserAdmin'));

// Manejo de rol

const RegisterRolAdmin = lazy(() => import('./rol/RegisterRolAdmin'));
const RolOptionsAdmin = lazy(() => import('./rol/RolOptionsAdmin'));
const UpdateRolAdmin = lazy(() => import('./rol/UpdateRolAdmin'));

const UserAdmin = () => {
	const { handleData } = useValidate();

	const itemMenu: MenuItem[] = useMemo(
		() =>
			[
				{ text: 'inicio', to: '/options', icon: 'home' },
				handleData({ per: 'user' })
					? { text: 'Usuarios', to: '/options/user', icon: 'user' }
					: null,
				handleData({ per: 'rol' })
					? { text: 'Roles', to: '/options/rol', icon: 'rol' }
					: null,
			].filter(Boolean) as MenuItem[],
		[handleData],
	);
	return (
		<DefaultPage title='admin' itemMenu={itemMenu}>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<Init />} />
					<Route path='/user'>
						<Route index element={<UserOptionsAdmin />} />
						<Route
							path='register'
							element={
								<Restricted per={Permission.userAdd}>
									<RegisterUserAdmin />
								</Restricted>
							}
						/>
						<Route
							path='update/:data'
							element={
								<Restricted per={Permission.userUpdate}>
									<UpdateUserAdmin />
								</Restricted>
							}
						/>
					</Route>

					<Route path='/rol'>
						<Route index element={<RolOptionsAdmin />} />
						<Route
							path='register'
							element={
								<Restricted per={Permission.rolAdd}>
									<RegisterRolAdmin />
								</Restricted>
							}
						/>
						<Route
							path='update/:data'
							element={
								<Restricted per={Permission.rolUpdate}>
									<UpdateRolAdmin />
								</Restricted>
							}
						/>
					</Route>

					<Route path='/profile' element={<Profile />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</Suspense>
		</DefaultPage>
	);
};

export default UserAdmin;

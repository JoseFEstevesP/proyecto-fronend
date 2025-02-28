import { Route, Routes } from 'react-router-dom';
import Msg from './components/msg/Msg';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import { MsgProvider } from './context/msg/MsgProvider';
import { RolProvider } from './context/rol/RolProvider';
import { TokenProvider } from './context/token/TokenProvider';
import Error404 from './page/error/404/Error404';
import { LoginUser } from './page/user/default/LoginUser';
import RecoveryPassword from './page/user/default/recovery/RecoveryPassword';
import { RegisterUser } from './page/user/default/RegisterUser';
import UserValOptions from './page/userValOptions/UserValOptions';

function App() {
	return (
		<TokenProvider>
			<RolProvider>
				<MsgProvider>
					<>
						<Routes>
							<Route path='/' element={<LoginUser />} />
							<Route path='/registerUser' element={<RegisterUser />} />
							<Route path='/recovery' element={<RecoveryPassword />} />
							<Route element={<ProtectedRoutes />}>
								<Route path='/options/*' element={<UserValOptions />} />
							</Route>
							<Route path='*' element={<Error404 />} />
						</Routes>
						<Msg />
					</>
				</MsgProvider>
			</RolProvider>
		</TokenProvider>
	);
}

export default App;

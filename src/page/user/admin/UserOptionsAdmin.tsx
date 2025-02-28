import { AxiosError } from 'axios';
import { Suspense, useCallback, useContext, useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { Btn } from '../../../components/button/Btn';
import Filter from '../../../components/filter/Filter';
import LinkPer from '../../../components/link/LinkPer';
import Loader from '../../../components/loader/Loader';
import useModal from '../../../components/modal/hooks/useModal';
import Modal from '../../../components/modal/Modal';
import Restricted from '../../../components/restricted/Restricted';
import Search from '../../../components/search/Search';
import Table from '../../../components/table/Table';
import { API_ROUTES } from '../../../constants/apiRoutes';
import { ContextMsg } from '../../../context/msg/MsgContext';
import { processErrorResponse } from '../../../functions/handleError';
import useDelete from '../../../hooks/useDelete';
import useFilter from '../../../hooks/useFilter';
import useGet from '../../../hooks/useGet';
import useValidate from '../../../hooks/useValidate';
import { ParamsDataGet } from '../../../typeGlobal';
import { Permission } from '../../rol/enum/enum';
import { userMessages } from '../msg';
import styleBtn from './../../../components/button/Btn.module.scss';
import style from './../../style/DefaultPageStyle.module.scss';
import { OrderUserProperty, textOrderUser } from './enum/enum';
import { UserResponse, UserStructure } from './interfaces';

const UserOptionsAdmin = ({ className }: { className?: string }) => {
	const { handleData } = useValidate();
	const { getData } = useGet();
	const [data, setData] = useState<UserStructure | null>(null);
	const { filter, handlePagination, handleFilterData, handleResetData } =
		useFilter({
			orderProperty: OrderUserProperty.ci,
		});
	const { setMsg } = useContext(ContextMsg);

	const handleGetData = useCallback(async () => {
		try {
			const fetchedData: UserStructure = await getData({
				url: API_ROUTES.GET_USER,
				params: filter as ParamsDataGet,
			});
			if (fetchedData) {
				setData(fetchedData);
			}
		} catch (err) {
			const error = err as AxiosError;
			processErrorResponse({
				error: error.response?.data as FieldValues,
				setMsg,
			});
		}
	}, [filter, getData, setMsg]);

	useEffect(() => {
		if (!handleData({ per: Permission.userRead })) return;
		handleGetData();
	}, [filter, getData, handleData, handleGetData]);

	const deleteModal = useModal({});
	const [deleteUid, setDeleteUid] = useState('');
	const { handleDelete } = useDelete({
		url: API_ROUTES.DELETE_USER,
		handleGetData,
	});

	return (
		<Suspense fallback={<Loader />}>
			<section className={`${style.defaultPageStyle} ${className}`}>
				<Restricted per={Permission.userDelete}>
					<Modal
						title={userMessages.page.delete.title}
						handleClose={deleteModal.handleClose}
						isOpen={deleteModal.isOpen}
					>
						<h3 className={style.defaultPageStyle__title}>
							{userMessages.page.delete.confirm}
						</h3>
						<Btn
							title={userMessages.page.delete.confirm}
							text={userMessages.page.delete.title}
							icon={{
								iconName: 'delete',
								type: 'fpIcons',
								className: `${style.defaultPageStyle__icon} ${style['defaultPageStyle__icon--delete']}`,
							}}
							onClick={() => {
								handleDelete({ uid: deleteUid });
								deleteModal.handleClose();
							}}
							className={styleBtn['btn--form']}
							disabled={!deleteUid}
						/>
					</Modal>
				</Restricted>

				<Restricted per={Permission.userAdd}>
					<div className={style.defaultPageStyle__optionPosition}>
						<LinkPer
							text={userMessages.page.register.title}
							to='/options/user/register'
							className={style.defaultPageStyle__btnRegister}
							icon={{
								iconName: 'add',
								type: 'fpIcons',
							}}
						/>
						<Search
							handleData={handleFilterData}
							classNames={style.defaultPageStyle__search}
						/>
					</div>
				</Restricted>

				<Restricted per={Permission.userRead}>
					<section className={style.defaultPageStyle__filterPosition}>
						<Filter
							handleData={handleFilterData}
							resetFilter={handleResetData}
							Order={{
								OrderProperty: OrderUserProperty,
								textOrderProperty: textOrderUser,
								defaultOrderProperty: OrderUserProperty.ci,
							}}
						/>
					</section>
				</Restricted>

				<Restricted per={Permission.userRead}>
					<section className={style.defaultPageStyle__tablePosition}>
						{data ? (
							<Table
								columns={[
									{ key: 'ci', label: 'Cédula' },
									{ key: 'name', label: 'Nombres' },
									{ key: 'surname', label: 'Apellidos' },
									{ key: 'email', label: 'Email' },
									{ key: 'phone', label: 'Teléfono' },
									{ key: 'pharmacy', label: 'Farmacia' },
									{ key: 'rol', label: 'Rol' },
									{ key: 'actions', label: 'Acciones' },
								]}
								data={data.rows.map((item: UserResponse) => ({
									ci: `${item.v_e}-${item.ci}`,
									name: `${item.first_name} ${item.middle_name}`,
									surname: `${item.first_surname} ${item.last_surname}`,
									email: item.email,
									phone: item.phone,
									pharmacy:
										item.pharmacyAS?.name ??
										userMessages.page.pharmacyNotAssignat,
									rol: item.rol.name,
									actions: (
										<div className={style.defaultPageStyle__contentBtn}>
											<Restricted per={Permission.userDelete}>
												<Btn
													title={userMessages.page.delete.title}
													icon={{
														iconName: 'delete',
														type: 'fpIcons',
														className: `${style.defaultPageStyle__icon} ${style['defaultPageStyle__icon--delete']}`,
													}}
													onClick={() => {
														setDeleteUid(item.uid);
														deleteModal.handleOpen();
													}}
												/>
											</Restricted>
											<Restricted per={Permission.userUpdate}>
												<LinkPer
													to={`/options/user/update/${JSON.stringify({
														uid: item.uid,
														v_e: item.v_e,
														ci: item.ci,
														first_name: item.first_name,
														middle_name: item.middle_name,
														first_surname: item.first_surname,
														last_surname: item.last_surname,
														email: item.email,
														sex: item.sex,
														phone: item.phone,
														uidPharmacy: item.uidPharmacy,
														uidRol: item.uidRol,
													})}`}
													className={style.defaultPageStyle__linkEdit}
													icon={{
														iconName: 'edit',
														type: 'fpIcons',
														className: `${style.defaultPageStyle__icon} ${style['defaultPageStyle__icon--update']}`,
													}}
												/>
											</Restricted>
										</div>
									),
								}))}
								currentPage={data.currentPage}
								onPageChange={handlePagination}
								totalPages={data.pages}
							/>
						) : (
							<Loader />
						)}
					</section>
				</Restricted>
			</section>
		</Suspense>
	);
};

export default UserOptionsAdmin;

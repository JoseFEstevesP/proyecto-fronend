import { AxiosError } from 'axios';
import { Suspense, useCallback, useContext, useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { Btn } from '../../components/button/Btn';
import Filter from '../../components/filter/Filter';
import LinkPer from '../../components/link/LinkPer';
import Loader from '../../components/loader/Loader';
import useModal from '../../components/modal/hooks/useModal';
import Modal from '../../components/modal/Modal';
import Restricted from '../../components/restricted/Restricted';
import Search from '../../components/search/Search';
import Table from '../../components/table/Table';
import { API_ROUTES } from '../../constants/apiRoutes';
import { ContextMsg } from '../../context/msg/MsgContext';
import { processErrorResponse } from '../../functions/handleError';
import useDelete from '../../hooks/useDelete';
import useFilter from '../../hooks/useFilter';
import useGet from '../../hooks/useGet';
import useValidate from '../../hooks/useValidate';
import { ParamsDataGet } from '../../typeGlobal';
import styleBtn from './../../components/button/Btn.module.scss';
import style from './../style/DefaultPageStyle.module.scss';
import {
	OrderRolProperty,
	Permission,
	permissionTranslations,
	RolTypeText,
	textOrderRol,
} from './enum/enum';
import { RolResponse, RolStructure } from './interfaces';
import { rolMessages } from './msg';

const RolOptionsAdmin = ({ className }: { className?: string }) => {
	const { handleData } = useValidate();
	const { getData } = useGet();
	const [data, setData] = useState<RolStructure | null>(null);
	const { filter, handlePagination, handleFilterData, handleResetData } =
		useFilter({
			orderProperty: OrderRolProperty.name,
		});
	const { setMsg } = useContext(ContextMsg);

	const handleGetData = useCallback(async () => {
		try {
			const fetchedData: RolStructure = await getData({
				url: API_ROUTES.GET_ROL,
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
		if (!handleData({ per: Permission.rolRead })) return;
		handleGetData();
	}, [filter, getData, handleData, handleGetData]);

	const deleteModal = useModal({});
	const [deleteUid, setDeleteUid] = useState('');
	const { handleDelete } = useDelete({
		url: API_ROUTES.DELETE_ROL,
		handleGetData,
	});

	return (
		<Suspense fallback={<Loader />}>
			<section className={`${style.defaultPageStyle} ${className}`}>
				<Restricted per={Permission.rolDelete}>
					<Modal
						title={rolMessages.page.delete.title}
						handleClose={deleteModal.handleClose}
						isOpen={deleteModal.isOpen}
					>
						<h3 className={style.defaultPageStyle__title}>
							{rolMessages.page.delete.confirm}
						</h3>
						<Btn
							title={rolMessages.page.delete.confirm}
							text={rolMessages.page.delete.title}
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

				<Restricted per={Permission.rolAdd}>
					<div className={style.defaultPageStyle__optionPosition}>
						<LinkPer
							text={rolMessages.page.register.title}
							to='/options/rol/register'
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

				<Restricted per={Permission.rolRead}>
					<section className={style.defaultPageStyle__filterPosition}>
						<Filter
							handleData={handleFilterData}
							resetFilter={handleResetData}
							Order={{
								OrderProperty: OrderRolProperty,
								textOrderProperty: textOrderRol,
								defaultOrderProperty: OrderRolProperty.name,
							}}
						/>
					</section>
				</Restricted>

				<Restricted per={Permission.rolRead}>
					<section className={style.defaultPageStyle__tablePosition}>
						{data ? (
							<Table
								columns={[
									{ key: 'name', label: 'Nombres' },
									{ key: 'description', label: 'Descripción' },
									{ key: 'permissions', label: 'Permisos' },
									{ key: 'type', label: 'Tipo' },
									{ key: 'actions', label: 'Acciones' },
								]}
								data={data.rows.map((item: RolResponse) => ({
									name: item.name,
									description: item.description,
									permissions: (
										<div className={style.defaultPageStyle__permissions}>
											{item.permissions.map(item => (
												<span
													className={style.defaultPageStyle__permission}
													key={crypto.randomUUID()}
												>
													{permissionTranslations[item]}
												</span>
											))}
										</div>
									),
									type: RolTypeText[item.typeRol],
									actions: (
										<div className={style.defaultPageStyle__contentBtn}>
											<Restricted per={Permission.rolDelete}>
												<Btn
													title={rolMessages.page.delete.title}
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
											<Restricted per={Permission.rolUpdate}>
												<LinkPer
													to={`/options/rol/update/${JSON.stringify({
														uid: item.uid,
														name: item.name,
														description: item.description,
														permissions: item.permissions,
														typeRol: item.typeRol,
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

export default RolOptionsAdmin;

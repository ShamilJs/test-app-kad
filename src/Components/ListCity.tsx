import React, { useEffect, useState } from 'react';
import { Card, OptionList } from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';
import { getCity } from './server';
import {
	getCityStore,
	installFavoritesStatus,
	showError,
	showLoader } from '../redux/action';
import { StateType } from './types/types';


	
export const ListCity: React.FC = () => {
	const [selected, setSelected] = useState<Array<string>>([]);
	const cities = useSelector((state: StateType) => state?.app?.cities);
	const dispatch = useDispatch()

	useEffect(() => {
		if (!selected.length) return
		dispatch(showLoader(true))
		dispatch(showError(false))
		getCity(selected.join(''))
		.then(res => {
			dispatch(getCityStore(res))
			dispatch(installFavoritesStatus(true))
		})
		.catch(() => dispatch(showError(true)))
		.finally(() => {
			dispatch(showLoader(false))
		})
		// eslint-disable-next-line
	}, [selected])
 
	return (
		<Card>
			<OptionList
				title="Избранные города"
				onChange={setSelected}
				options={cities}
				selected={selected}
			/>
		</Card>
	);
  }


import React, { useEffect, useState } from 'react';
import { Card, OptionList } from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';
import { getCity } from './server';
import { getCityStore, installFavoritesStatus, showLoader } from '../redux/action';

export const ListCity = () => {
	const [selected, setSelected] = useState([]);
	const cities = useSelector(state => state.app.cities);
	const dispatch = useDispatch()

	useEffect(() => {
		if (!selected.length) return
		dispatch(showLoader(true))
		getCity(selected.join(''))
		.then(res => {
			dispatch(getCityStore(res))
			dispatch(installFavoritesStatus(true))
		})
		.catch(er => console.log(er))
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


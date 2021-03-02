import React, { useCallback, useState } from 'react';
import { Button, TextField, } from '@shopify/polaris';
import { getCity } from './server';
import { useDispatch, useSelector } from 'react-redux';
import { getCityStore, installFavoritesStatus, showLoader } from '../redux/action';

export const SearchCity = () => {
	const cities = useSelector(state => state.app.cities);
	const [textFieldValue, setTextFieldValue] = useState('');
	const dispatch = useDispatch()

	const handleClick = (e) => {
		if (textFieldValue === '') return;
		let city = cities.find(item => item.label.toUpperCase() === textFieldValue.toUpperCase());
		dispatch(showLoader(true))
		getCity(textFieldValue)
		.then(res => {
			dispatch(getCityStore(res))
			if (city) dispatch(installFavoritesStatus(true))
			else dispatch(installFavoritesStatus(false))
			setTextFieldValue('')
		})
		.catch(er => console.log(er))
		.finally(() => {
			dispatch(showLoader(false))
		})
	}
  
	const handleTextFieldChange = useCallback(
		(value) => setTextFieldValue(value),
		[],
	);
  
  
	return (
		<div className="Control">
			<TextField
				label="Поиск города"
				value={textFieldValue}
				onChange={handleTextFieldChange}
			/>
			<Button onClick={handleClick}>Поиск</Button>
		</div>
	);
  }
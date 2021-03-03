import React, { useCallback, useState } from 'react';
import { Button, TextField, TextStyle, } from '@shopify/polaris';
import { getCity } from './server';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCityStore,
	installFavoritesStatus,
	showLoader,
	showAlert, 
	showError} from '../redux/action';

export const SearchCity = () => {
	const cities = useSelector(state => state.app.cities);
	const negativeSearch = useSelector(state => state.app.alert);
	const [textFieldValue, setTextFieldValue] = useState('');
	const dispatch = useDispatch()

	const handleClick = (e) => {
		if (textFieldValue === '') return;
		let city = cities.find(item => item.label.toUpperCase() === textFieldValue.toUpperCase());
		dispatch(showLoader(true))
		dispatch(showError(false))
		getCity(textFieldValue)
		.then(res => {
			if (res.message) {
				dispatch(showAlert(true))
				return
			}
			dispatch(showAlert(false))
			dispatch(getCityStore(res))
			if (city) dispatch(installFavoritesStatus(true))
			else dispatch(installFavoritesStatus(false))
			setTextFieldValue('')
		})
		.catch(() => dispatch(showError(true)))
		.finally(() => {
			dispatch(showLoader(false))
		})
	}
  
	const handleTextFieldChange = useCallback(
		(value) => setTextFieldValue(value),
		[],
	);
  
  
	return (
		<div className="Control-container">
			<div className="Control">
				<TextField
					label="Поиск города"
					value={textFieldValue}
					onChange={handleTextFieldChange}
				/>
				<Button onClick={handleClick}>Поиск</Button>
			</div>
			{negativeSearch && <TextStyle variation="negative">Город не найден</TextStyle>}
		</div>
	);
  }
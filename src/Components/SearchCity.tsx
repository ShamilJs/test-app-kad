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
import { CityAndLabelType, StateType } from './types/types';



export const SearchCity: React.FC = () => {
	const cities = useSelector((state: StateType) => state.app.cities);
	const negativeSearch = useSelector((state: StateType) => state.app.alert);
	const [textFieldValue, setTextFieldValue] = useState('');
	const dispatch = useDispatch()

	const handleClick = (): void => {
		if (textFieldValue === '') return;
		let city = cities.find((item: CityAndLabelType) => item.label.toUpperCase() === textFieldValue.toUpperCase());
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
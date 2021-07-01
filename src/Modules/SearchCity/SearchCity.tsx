import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@shopify/polaris';

import { getCity } from '../../Stores/actions';

import { CityAndLabelType, StateType } from '../../Shared/types/types';

import { Alert } from './Components';

import c from './styles.module.css';

export const SearchCity = () => {
	const cities = useSelector((state: StateType) => state.app.cities);
	const city = useSelector((state: StateType) => state.app.city);

	const [textFieldValue, setTextFieldValue] = useState('');

	const dispatch = useDispatch();

	useEffect(() => setTextFieldValue(''), [city]);

	const handleClick = () => {
		if (textFieldValue === '') return;

		let cityInFavorites = cities.find((item: CityAndLabelType) =>
			item.label.toUpperCase() === textFieldValue.toUpperCase());

		dispatch(getCity(textFieldValue, cityInFavorites));
	};
  
	const handleTextFieldChange = useCallback(value => setTextFieldValue(value), []);
  
	return (
		<div className={c.root}>
			<div className={c.control}>
				<TextField
					label="Поиск города"
					value={textFieldValue}
					onChange={handleTextFieldChange}
				/>
				<Button onClick={handleClick}>
					Поиск
				</Button>
			</div>

			<Alert/>
		</div>
	);
};
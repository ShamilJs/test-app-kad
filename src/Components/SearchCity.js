import React, { useCallback, useState } from 'react';
import { Button, TextField, } from '@shopify/polaris';
import { getCity } from './server';
import { useDispatch } from 'react-redux';
import { getCityStore } from '../redux/action';

export const SearchCity = ({favorites, setFavorites}) => {

	const [textFieldValue, setTextFieldValue] = useState('');
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	localStorage.setItem('cityes', JSON.stringify(searchResult));
	// }, [searchResult])


	const handleClick = () => {
		getCity(textFieldValue)
		.then(res => {
			dispatch(getCityStore(res))
			setTextFieldValue('')
		})
		// .then(res => {
			
		// 	setSearchResult(searchResult => ({...searchResult, [res.id]: res.name}))
			
		// })
		.catch(er => console.log(er))
	}
  
	const handleTextFieldChange = useCallback(
		(value) => setTextFieldValue(value),
		[],
	);
  
	// const handleClearButtonClick = useCallback(() => setTextFieldValue(''), []);
  
	return (
		<div className="Control">
			<TextField
				label="Поиск города"
				value={textFieldValue}
				onChange={handleTextFieldChange}
				// clearButton
				// onClearButtonClick={handleClearButtonClick}
				
			/>
			<Button onClick={handleClick}>Поиск</Button>
		</div>
	);
  }
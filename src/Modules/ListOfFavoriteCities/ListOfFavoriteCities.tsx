import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, OptionList } from '@shopify/polaris';

import { getCity } from '../../Stores/actions';

import { StateType } from '../../Shared/types/types';
	
export const ListOfFavoriteCities = () => {
	const cities = useSelector((state: StateType) => state.app?.cities);

	const [selected, setSelected] = useState<string[]>([]);
	
	const dispatch = useDispatch();

	useEffect(() => {
		if (!selected.length) return;
		dispatch(getCity(selected.join(''), true));
	}, [selected, dispatch]);
 
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
};
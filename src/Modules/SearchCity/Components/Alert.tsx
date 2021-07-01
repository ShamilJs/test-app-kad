import React from 'react';
import { TextStyle, } from '@shopify/polaris';
import { useSelector } from 'react-redux';

import { StateType } from '../../../Shared/types/types';

export const Alert = () => {
	const negativeSearch = useSelector((state: StateType) => state.app.alert);

	return negativeSearch
		? <TextStyle variation="negative">Город не найден</TextStyle>
		: null
};
import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '@shopify/polaris';

import { StateType } from '../../../../Shared/types/types';

import c from './styles.module.css';

export const SpinnerApp = () => {
	const loader = useSelector((state: StateType) => state.app.loader);
	
	if (!loader) return null;

	return (
		<div className={c.spinner} >
			<Spinner size="large" />
		</div>
	);
};
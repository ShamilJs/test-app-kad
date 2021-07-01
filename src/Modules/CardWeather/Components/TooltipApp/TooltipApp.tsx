import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
	TextStyle,
	Tooltip } from '@shopify/polaris';

import { addFavoritesCity } from '../../../../Stores/actions';

import { StateType } from '../../../../Shared/types/types';

import c from './styles.module.css';

export const TooltipApp = () => {
	const favorites = useSelector((state: StateType) => state.app.favorites);
	const city = useSelector((state: StateType) => state?.app?.city);
	const cities = useSelector((state: StateType) => state.app.cities);

	const dispatch = useDispatch();

	const content = favorites ? 'Удалить из Избранного' : 'Добавить в Избранное';

	const handleClick = () => {
		dispatch(addFavoritesCity(city!.name!))
		localStorage.setItem('cityes', JSON.stringify(cities))
	};
	
	return (
		<div className={c.root}>
			<Tooltip
				preferredPosition="mostSpace"
				active={false}
				content={content}
			>
				<TextStyle variation="strong">
					<img
						src="./21.png"
						alt="21"
						onClick={handleClick}
						className={favorites ? c.hoverImg : ''}
					/>
				</TextStyle>
			</Tooltip>
		</div>
	);
};
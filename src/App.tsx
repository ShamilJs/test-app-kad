import React from 'react';
import { useSelector } from 'react-redux';

import { StateType } from './Shared/types/types';

import { CardWeather, ListOfFavoriteCities, SearchCity } from './Modules';

import './App.css';

export const App = () => {
	const favorites = useSelector((state: StateType) => state.app.favorites);

	return (
		<div className="app">
			<div className="container">
				<CardWeather favorites={favorites}/>
				
				<div className="search-weather">
					<SearchCity />
					<ListOfFavoriteCities />
				</div>
			</div>
		</div>
	);
};
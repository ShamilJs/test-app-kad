import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListCity } from './Components/ListCity';
import { SearchCity } from './Components/SearchCity';
import { getCityStore, showError, showLoader } from './redux/action';
import { getCityGeolocation } from '././Components/server';
import { CardWeather } from './Components/CardWeather';
import './App.css';


export const App = () => {
	const favorites = useSelector(state => state.app.favorites);

    const dispatch = useDispatch()

	useEffect(() => {
		dispatch(showLoader(true))
		dispatch(showError(false))
		navigator.geolocation.getCurrentPosition(pos => {
			getCityGeolocation(pos.coords.longitude, pos.coords.latitude)
			.then(res => dispatch(getCityStore(res)))
			.catch(() => dispatch(showError(true)))
			.finally(() => dispatch(showLoader(false)))
		}, error => console.log("Пожалуйста, разрешите доступ к использованию Вашей геопозиции!"));
		// eslint-disable-next-line
	}, [])


	return (
		<div className="app">
			<div className="container">
				<CardWeather favorites={favorites}/>
				<div className="search-weather">
					<SearchCity />
					<ListCity />
				</div>
			</div>
		</div>
	);
}






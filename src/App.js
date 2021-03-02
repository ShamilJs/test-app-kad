import { DisplayText, Heading, TextContainer} from '@shopify/polaris';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ListCity } from './Components/ListCity';
import { SearchCity } from './Components/SearchCity';
import { addFavoritesCity, getCityStore, showLoader } from './redux/action';
import { getCity } from '././Components/server';

export const App = () => {
	const city = useSelector(state => state?.app?.city);
	const favorites = useSelector(state => state.app.favorites);
	const cities = useSelector(state => state.app.cities);
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(showLoader(true))
		getCity('Томск')
		.then(res => {
			dispatch(getCityStore(res))
		})
		.catch(er => console.log(er))
		.finally(() => {
			dispatch(showLoader(false))
		})
		// eslint-disable-next-line
	}, [])

	const handleClick = () => {
		dispatch(addFavoritesCity(city.name))
		localStorage.setItem('cityes', JSON.stringify(cities))
	}

	return (
		<div className="app">
			<div className="container">
				<div className="card-weather">
					<TextContainer>
						<div className="card-weather-title">
							<Heading>Погода в городе {city?.name}</Heading>
							<img
								src="./21.png"
								alt="21"
								onClick={handleClick}
								className={favorites ? 'hover-img' : ''}
							/>
						</div>
						<DisplayText size="extraLarge" element="p">{city?.name}</DisplayText>
						<DisplayText size="extraLarge" element="p">{city.main?.temp} &deg;C</DisplayText><br/><br/><br/>
						<DisplayText size="Small" element="p">Давление: {city.main?.pressure} мм.рт.ст</DisplayText>
						{city.weather?.map((item, i) => (
							<DisplayText key={i} size="Small" element="p">Осадки: {item.description}</DisplayText>
						))}
					</TextContainer>
				</div>
				<div className="search-weather">
					<SearchCity />
					<ListCity />
				</div>
			</div>
		</div>
	);
}






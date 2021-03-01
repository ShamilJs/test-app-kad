import { DisplayText, Heading, TextContainer} from '@shopify/polaris';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ListCity } from './Components/ListCity';
import { SearchCity } from './Components/SearchCity';
import { getCityStore } from './redux/action';
import { getCity } from '././Components/server';

export const App = () => {
	const city = useSelector(state => state?.app?.city)
	const dispatch = useDispatch()

	const [favorites, setFavorites] = useState({});
	const [img, setImg] = useState(false)

	const localUser = JSON.parse(localStorage.getItem('cityes'));

	const handalState = () => setFavorites(localUser);

	const changeStatus = () => {
		let count = 0;
		for(let key in favorites) {
			if (city.name === favorites[key]) count ++
		}
		if (count !== 0) setImg(true)
		else setImg(false)
	};

	useEffect(() => {
		if (!localUser ||  localUser === '') return
		else handalState()
		getCity('Томск')
		.then(res => {
			dispatch(getCityStore(res))
		})
		.catch(er => console.log(er))
	}, [])


	useEffect(() => {
		changeStatus()
	}, [city, localUser])


	useEffect(() => {
		localStorage.setItem('cityes', JSON.stringify(favorites));
	}, [favorites])


	const handleClick = () => {
		setFavorites(favorites => ({...favorites, [city.id]: city.name}))
		changeStatus()
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
								className={img ? 'hover-img' : ''}
							/>
						</div>
						<DisplayText size="extraLarge" element="p">{city.main?.temp} &deg;C</DisplayText>
						<DisplayText size="Large" element="p">Давление: {city.main?.pressure} мм.рт.ст</DisplayText>
					</TextContainer>
				</div>
				<div className="search-weather">
					<SearchCity favorites={favorites} setFavorites={setFavorites}/>
					<ListCity favorites={favorites} setFavorites={setFavorites}/>
				</div>
			</div>
		</div>
	);
}






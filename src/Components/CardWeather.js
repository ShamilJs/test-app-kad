import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritesCity } from '../redux/action';
import { ErrorComponent } from './ErrorComponent';
import { 
	DisplayText,
	Heading,
	Spinner,
	TextContainer,
	TextStyle,
	Tooltip } from '@shopify/polaris';

export const CardWeather = ({ favorites }) => {
    const city = useSelector(state => state?.app?.city);
	const cities = useSelector(state => state.app.cities);
    const loader = useSelector(state => state.app.loader);
    const err = useSelector(state => state.app.error);
    const dispatch = useDispatch()

    const handleClick = () => {
		dispatch(addFavoritesCity(city.name))
		localStorage.setItem('cityes', JSON.stringify(cities))
	}

    return (
        <div className="card-weather">
            {loader ? 
                <div className="card-spinner" >
                    <Spinner accessibilityLabel="Spinner example" size="large" />
                </div> :
                city.message ? 
                <p className="card-message">
                    {city.message} <TextStyle variation="code"> {city.cod} </TextStyle>.
                </p> :
                err ? <ErrorComponent/> :
                <TextContainer>
                    <div className="card-weather-title">
					<div className="card-weather-img-tooltip">
						<Tooltip
							preferredPosition="mostSpace"
							active={false}
							content={favorites ?
								"Удалить из Избранного" :
								"Добавить в Избранное"
							}
						>
							<TextStyle variation="strong">
								<img
									src="./21.png"
									alt="21"
									onClick={handleClick}
									className={favorites ? 'hover-img' : ''}
								/>
							</TextStyle>
						</Tooltip>
					</div>
                        <Heading>Погода в {city?.name}</Heading>
                    </div>
                    <DisplayText size="extraLarge" element="p"> {city?.name}</DisplayText>
                    <DisplayText size="extraLarge" element="p">{city.main?.temp} &deg;C</DisplayText><br/><br/><br/>
                    <DisplayText size="Small" element="p">Давление: {city.main?.pressure} мм.рт.ст</DisplayText>
                    {city.weather?.map((item, i) => (
                        <DisplayText key={i} size="Small" element="p">Осадки: {item.description}</DisplayText>
                    ))}
                </TextContainer>
            }
		</div>
    )
}
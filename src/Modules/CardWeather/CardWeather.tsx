import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
	DisplayText,
	Heading,
	TextContainer} from '@shopify/polaris';

import { getCityGeolocation } from '../../Stores/actions';

import { StateType } from '../../Shared/types/types';

import { RequestError, SpinnerApp, TooltipApp } from './Components';

import c from './styles.module.css';

interface TargetProps { favorites: boolean }

export const CardWeather = (props: TargetProps) => {
	const city = useSelector((state: StateType) => state?.app?.city);

	const dispatch = useDispatch();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(pos => {
			dispatch(getCityGeolocation(pos.coords.longitude, pos.coords.latitude));
		}, error => console.log('Пожалуйста, разрешите доступ к использованию Вашей геопозиции!'));
	}, [dispatch]);

    return (
		<div className={c.root}>
			<SpinnerApp/>

			<RequestError/>

			<TextContainer>
				<div className={c.cardWeatherTitle}>
					<TooltipApp/>
					<Heading>
						Погода в {city?.name}
					</Heading>
				</div>

				<DisplayText size="extraLarge" element="p"> {city?.name}</DisplayText>

 				<DisplayText size="extraLarge" element="p">{city.main?.temp} &deg;C</DisplayText><br/><br/><br/>

				<DisplayText size="small" element="p">Давление: {city.main?.pressure} мм.рт.ст</DisplayText>
					
				{city.weather?.map((item: any, i: number) => (
					<DisplayText key={i} size="small" element="p">Осадки: {item.description}</DisplayText>
				))}
			</TextContainer>
		</div>
    );
};
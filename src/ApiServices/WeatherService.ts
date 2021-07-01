import HTTPService from "./HttpService";

import { API_KEY } from "../Shared/Constants/Constants";

class WeatherService extends HTTPService{
	public getCityGeolocation(longitude: number, latitude: number) {
		return this.GET(`?lat=${latitude}&lon=${longitude}&lang=ru&&units=metric&appid=${API_KEY}`)
	}

	public getCity(city: string) {
		return this.GET(`?q=${city}&lang=ru&&units=metric&appid=${API_KEY}`)
	}
};

export default new WeatherService();
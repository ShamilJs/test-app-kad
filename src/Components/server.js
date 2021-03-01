const API = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'eb74b305026737ef1242f65de6608a66'


export const getCity = (city) => {
	return fetch(`${API}?q=${city}&lang=ru&&units=metric&appid=${API_KEY}`)
	.then((response) => response.json())
}
import { HOST } from "../Shared/Constants/Constants";
import { Method } from "../Shared/Enums/enums";

class HTTPService {
	private readonly host: string = HOST;
	
	/** 
	 * запрос
	 * @url - путь
	 * @method - метод
	 * @body - тело запроса
	*/
	public apiRequest(url: string, method: Method, body?: any): Promise<any> {
		const options: any = { method, body };
	
		return fetch(this.host + url, options)
			.then(response => response.json())
	}

	public GET<T>(path: string): Promise<T> {
		return this.apiRequest(`${path}`, Method.Get)
	}

	public POST<T>(path: string, body: any): Promise<T> {
		return this.apiRequest(`${path}`, Method.Post, body)
	}
}

export default HTTPService;
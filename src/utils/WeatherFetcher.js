// We just installed axios which makes our ajax requests
// we are importing the library here
import axios from 'axios';


// The documentation states to add this
//APPID is the Api secret key that you are given.
//APPID is the syntax that this site used.
const dailyWeather = "http://api.openweathermap.org/data/2.5/weather?q="
const tail = "&APPID=3d89e528875373517df6b87a60ed5a43"

const fiveDayWeather = "http://api.openweathermap.org/data/2.5/forecast/daily?q="
const fiveDayTail = "&cnt=5"

let WeatherFetcher = {
	fetchDailyWeather: function(city) {
		let url = dailyWeather + city + tail;
		return axios.get(url);
	},
	fetchFiveDayWeather: function(city) {
		let url = fiveDayWeather + city + tail + fiveDayTail;
		return axios.get(url);
	}
}

export default WeatherFetcher;

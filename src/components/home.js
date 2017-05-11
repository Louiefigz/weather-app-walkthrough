import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../css/Home.css';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import WeatherFetcher from '../utils/WeatherFetcher';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		}
	}
	componentDidMount() {
			WeatherFetcher.fetchFiveDayWeather("bronx")
				.then((data) => this.setState({fiveDayWeather: data.data, loaded: true}));
		}

		componentDidUpdate(){
			
		}
	render() {


		return (
			<div className="Home">
				<div className="Instructions">
					<h1>Enter a City and State</h1>
					<div className="Input">
						<FormGroup bsSize="large">
	      					<FormControl type="text" placeholder="New York, NY"  />
	    				</FormGroup>
	    			</div>
					<Button bsStyle="success" bsSize="large" >Get Weather</Button>
				</div>

			</div>
		);
	}
}

export default Home;

import React from "react";
import Home from "./Home"
import {fetchRandomNumber} from '../actions/calculatorActions'

export default class Layout extends React.Component{
	render() {
		return(
			<div>
				 <h1>Basic Calculator</h1>
				 <Home fetchRandomNumber={fetchRandomNumber}/>
			</div>
		);
	}
}

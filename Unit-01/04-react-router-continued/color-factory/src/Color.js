import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Color extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		}

		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(e) {

		this.setState({name: this.props.name}, () => {
			this.props.toggleCheck(this.state);	
		})
		
	}

	render() {
		
		return(
			<div>
				<button onClick={this.handleClick}>{this.props.name}</button>
  			</div>
		)
	}
} 
 
export default Color;
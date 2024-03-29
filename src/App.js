import React, {Component}from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';


class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield:''
		}
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}
	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		}) 
	return(
		<div className="tc" >
			<h1 className="f1" >Buddies</h1> 
			<SearchBox  searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
	);
}
}
	

export default App;
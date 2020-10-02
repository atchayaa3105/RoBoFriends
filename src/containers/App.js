import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component{
constructor(){
	super();
	this.state={
		robots: [],
		searchfield:''
	}
}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users=>this.setState({robots:users}));
}

OnSearchChange=(event)=>{
	this.setState({searchfield:event.target.value});
}


render(){
	const filteredrobots=this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})

	if(this.state.robots.length===0){
		return(<h1>Loading.....</h1>)
	}else{
	return(
		<div className='tc'>
			<h1 className='f1'>RoBoFriends</h1>
			<SearchBox searchChanges={this.OnSearchChange}/>
			<Scroll>
			<ErrorBoundry>
				<CardList robots={filteredrobots}/>
			</ErrorBoundry>
			</Scroll>
		</div>
	);
	}
}
	
}
export default App;
import React, { Component } from 'react';
import Personajes from './Personajes';


class App extends Component{
	constructor(props){
		super(props);

		this.letterChange = this.letterChange.bind(this);

		this.state = {
	      friends: [],
				input: ''
				}
		}
	componentDidMount() {
		fetch('http://hp-api.herokuapp.com/api/characters ')
			.then(response => response.json())
			.then(json => {
				this.setState({
					friends: json
				});
				console.log(json)
			});
	 }

	 paintPotter() {
		let friendsToShow = this.state.friends;
		return (
			<ul className="listNames">
				{
			friendsToShow.map(
				friend => <li >
					<Personajes name={friend.name}
					 						image={friend.image}
											house={friend.house}
											alive={friend.alive} />
				</li>
			)
		}
	</ul>);
 }

 letterChange(event){
	let potter = event.target.value;
	if (potter.includes('g') === true){
		//potter=event.target.value.filter()
	}
 }

	render(){

		return(

			<div className='app'>
				<h1 className='title' >My Harry Potter Characters</h1>
				<input className='box' type="text" onChange={this.letterChange} />
				{ this.paintPotter() }
			</div>
		)

	}
}
export default App;

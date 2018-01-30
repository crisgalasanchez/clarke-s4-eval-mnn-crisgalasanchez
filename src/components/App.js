import React, { Component } from 'react';
import Personajes from './Personajes';

class App extends Component{
	constructor(props){
		super(props);

		this.state = {
	      friends: [],
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
			<ul>
				{
			friendsToShow.map(
				friend => <li>
					<Personajes name={friend.name}
					 						image={friend.image}
											house={friend.house}
											alive={friend.alive} />
				</li>
			)
		}
	</ul>);

 }

	render(){
		const contentG = (event) => {
		 let potter = event.target.value;
		 if (potter.includes('g') === true){
			 console.log('super Potter');
		 }
		}
		return(

			<div>
				<h1>My Harry Potter Characters</h1>
				<input type="text" onChange={contentG} />
				{ this.paintPotter() }
			</div>
		)

	}
}
export default App;

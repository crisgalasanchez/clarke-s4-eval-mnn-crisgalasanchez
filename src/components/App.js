import React, { Component } from 'react';
import Personajes from './Personajes';


class App extends Component{
	constructor(props){
		super(props);

		this.letterChange = this.letterChange.bind(this);

		this.state = {
	    friends: []
		}
	}
	componentDidMount() {
		fetch('http://hp-api.herokuapp.com/api/characters ')
			.then(response => response.json())
			.then(json => {
				this.setState({
					friends: json,
					friendsFiltered:[],
					filtered: false
				});
				console.log(json)
			});
	}

	paintPotter(friendsToShow) {
		//let friendsToShow = this.state.friends;
		return (
			<ul className="listNames">{
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
	 	this.state.friendsFiltered = this.state.friends.filter(friend => friend.name.toLowerCase().includes(event.target.value.toLowerCase()));
		this.setState({
      filtered : true
    });
 	}

	render(){
		let friendsToShow= this.state.friends;
		if(this.state.filtered){
			friendsToShow = this.state.friendsFiltered;
		}

		return(

			<div className='app'>
				<h1 className='title' >My Harry Potter Characters</h1>
				<div className='box'>
					<input className='inbox' type="text"
				 	onChange={this.letterChange} />
				 </div>
				{ this.paintPotter(friendsToShow) }
			</div>
		)

	}
}
export default App;

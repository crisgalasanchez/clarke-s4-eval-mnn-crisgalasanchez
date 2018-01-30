import React from 'react';

class Personajes extends React.Component{
  render() {
    return (
        <div className="card">
          <h2 className="name">{ this.props.name }</h2>
          <img className="image"src={ this.props.image } alt=""/>
          <h3 className="house">{ this.props.house }</h3>
          <span>{ this.props.alive? 'Alive':'Dead' }</span>
        </div>
      
    );

  }
}

export default Personajes;

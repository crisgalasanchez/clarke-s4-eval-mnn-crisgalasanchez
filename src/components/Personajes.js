import React from 'react';
import Live from '../image/live.png';
import Dead from '../image/dead.jpg';

class Personajes extends React.Component{
  render() {
    return (
        <div className="card">
          <h2 className="name">{ this.props.name }</h2>
          <div className="frame">
            <img className="image" src={ this.props.image } alt=""/>
          </div>
          <h3 className="house">{ this.props.house }</h3>
          <img className="icon" src={ this.props.alive ? Live:Dead } />
        </div>

    );

  }
}

export default Personajes;

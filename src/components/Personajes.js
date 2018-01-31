import React from 'react';
import Live from '../image/live.png';
import Dead from '../image/dead.jpg';

class Personajes extends React.Component{
  render() {
    return (
        <div className="card">
          <h2 className="name">{ this.props.name }</h2>
          <div>
            <img className="image" src={ this.props.image } alt=""/>
          </div>
          <img className = {`house house--${this.props.house}`} />
          <img className="icon" src={ this.props.alive ? Live:Dead } />
        </div>

    );

  }
}

export default Personajes;

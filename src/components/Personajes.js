import React from 'react';

class Personajes extends React.Component{
  render() {
    return (
      <div className="friend">
       { this.props.name }
      </div>
    );

  }
}

export default Personajes;

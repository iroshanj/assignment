import React from 'react';
import Login from './Login';

class Home extends React.Component {

  render() {
    return (
      <div className='home'>
        <div>
          <p className='logo'>FOODERS</p>
          <p className='logo-txt'>Lets order some deliciuos food of your choice at the door in easy steps </p>
        </div>
        <div>
          <Login history={this.props.history} />
        </div>
      </div>
    )
  }
}

export default Home;

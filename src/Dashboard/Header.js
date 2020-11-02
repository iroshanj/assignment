import React from 'react';
import Cart from './Cart';
import Orders from './Orders';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showOrder: {
        display: 'none'
      }
    };
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push('/');
  }

  orders = () => {
    this.setState({
      showOrder: {
        display: 'block'
      }
    })
  }

  callback = () => {
    this.setState({
      showOrder: {
        display: 'none'
      }
    })
  }
  
  render() {
    return (
      <div className="header">
        <span onClick={this.orders} ><button className="btn-menu">My Orders</button></span>
        <span onClick={this.logout}><button className="btn-menu">Logout</button></span>
        <Cart />
        <Orders show={this.state.showOrder} closeCall={this.callback} />
      </div>
    )
  }
}

export default Header;

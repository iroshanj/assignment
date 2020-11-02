import React from 'react';
import Header from './Header';
import Categories from './Categories';
import Products from './Products';

class User extends React.Component {

  render() {
    return (
      <>
        <Header history={this.props.history} data-test="header-component"/>
        <div className="parent">
          <Categories data-test="category-component"/>
          <Products data-test="products-component"/>
        </div>
      </>
    )
  }
}

export default User;

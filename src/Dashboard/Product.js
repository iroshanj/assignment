import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Redux/Action';
import Controller from './Controller';

class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      ids: [0]
    };
  }

  addToCart = (id) => {
    let arrTemp = this.state.ids;
    arrTemp.push(Number(id));
    this.props.dispatch(addToCart(id));
    this.setState({
      changed: id,
      ids: arrTemp
    })

  }

  handleDecreChange = (val, id) => {
    if (val == 1) {
      let arrIds = this.state.ids;
      let temp = [];

      for (let t = 0; t < arrIds.length; t++) {
        if (arrIds[t] != id) {
          temp.push(arrIds[t])
        }
      }
      this.setState({
        ids: temp
      })
    }
  }

  render() {
    let result;
    const products = this.props.products.filter((product) => product.type == this.props.category);
    const products1 = products.map((product) => {
      return (
        <li>
          <div><img class="product-img" src={product.url}></img></div>
          <div>{product.name}:{product.price}</div>
          <div><Controller handleDecreChange={this.handleDecreChange} fun={this.addToCart} quantity={product.quantity} productid={product.id} changed={this.state.ids} /> </div>
        </li>)
    })

    
    if (products1.length > 0) {
      result = products1;
    } else {
      result = <h3>No items are available in this category</h3>
    }

    return (
      <div className="Product">
        {result}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Product);

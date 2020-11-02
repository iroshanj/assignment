import React from 'react';
import { connect } from 'react-redux';
import { addQuantity, removeQuantity } from '../Redux/Action';

const style1 = {
  width: 'auto',
  height: 'auto',
}

const stl = {
  width: '60%',
  margin: '6px',
}

class Controller extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  increament = (e) => {
    const id = e.target.id;
    this.props.dispatch(addQuantity(id))
  }

  decrement = (e) => {
    let q = e.target.value;
    const id = e.target.id;
    this.props.handleDecreChange(q, id);
    this.props.dispatch(removeQuantity(id));
  }

  addcart = (e) => {
    let id = e.target.id;
    this.props.fun(id);
  }

  render() {
    let controller;
    const disablity = this.props.quantity > 0 ? false : true;
    if (this.props.changed.indexOf(this.props.productid) > -1 && this.props.quantity > 0) {
      controller = (
        <>
          <button data-test='decrement-button' value={this.props.quantity} disabled={disablity} id={this.props.productid} onClick={this.decrement} style={style1}>-</button>
          <input type='text' value={`${this.props.quantity}in Cart`} style={stl}></input>
          <button data-test='increment-button' id={this.props.productid} onClick={this.increament} style={style1}>+</button>
        </>
      )
    } else {
      controller = <button data-test='add-cart-button' id={this.props.productid} onClick={this.addcart} >Add to cart</button>
    }

    return (
      <>
        {controller}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    products: state.products,
    cart: state.cart
  }
}



export default connect(mapStateToProps)(Controller);

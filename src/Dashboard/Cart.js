import React from 'react';
import { connect } from 'react-redux';
import { addQuantity, removeQuantity, clearCart } from '../Redux/Action';

const style1 = {
  width: 'auto',
  height: 'auto',
}

const pricecss = {
  width: '100%',
  color: 'black',
  backgroundColor: 'lightgray'
}

const style2 = {
  width: '50px',
  height: 'auto',
  border: '1px solid #e4e4e4',
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: {
        display: 'none'
      },
      Back: {
        display: 'block'
      },
      orders: null
    };
  }

  addQuantity = (e) => {
    const id = e.target.id;
    this.props.dispatch(addQuantity(id))
  }

  decrement = (e) => {
    const id = e.target.id;
    this.props.dispatch(removeQuantity(id))
  }

  showCart = () => {
    if (this.props.cart.length > 0) {
      this.setState({
        show: {
          display: 'block'
        }
      })
    }
  }

  orderNow = () => {
    if (localStorage.getItem("orders") === null) {
      localStorage.setItem("orders", JSON.stringify([]));
    }
    let prevOrder = JSON.parse(localStorage.getItem("orders") || "[]");
    prevOrder.push(this.props.cart);
    localStorage.setItem("orders", JSON.stringify(prevOrder));
    alert('Your order is placed successfully , you can view orders on home page and also add more order.');

    this.setState({
      Back: {
        display: 'none'
      }
    })

    this.props.dispatch(clearCart());
  }

  goBack = () => {
    this.setState({
      show: {
        display: 'none'
      }
    })
  }

  render() {
    let controller;
    let cart = [];

    if (this.props.cart.length > 0) {
      cart = this.props.cart.map((product) => {
        return (
          <p className='cart-item-container'>
            <div className='cart-child'><img className="product-img" src={product.url}></img></div>
            <div className='cart-child'>
              <br></br><br></br>
              <strong>{product.name}</strong>
              <br></br> {product.price}
            </div>
            <div className='cart-child'>
              <br></br><br></br>
              <button id={product.id} onClick={this.decrement} style={style1}>-</button>
              <input type='text' value={product.quantity} style={style2} ></input>
              <button id={product.id} onClick={this.addQuantity} style={style1}>+</button>
            </div>
            <div className='cart-child'>
              <h4>Rs:{product.billing}</h4>
            </div>
          </p>
        )
      });
    }

    if (this.props.items == 0) {
      controller = <button style={style1} onClick={() => window.location.reload(false)}>Lets shop again</button>
    } else {
      controller = <> <div style={pricecss}>Item Total : {this.props.total}
        <p>Delivery : {50} </p>
        <p>GST Charges : {50} </p>
        <p>To Pay : {this.props.total + 100}</p>
      </div>
        <p><button onClick={this.orderNow}>Order Now</button></p></>
    }


    return (
      <>
        <span onClick={this.showCart}>My Cart:({this.props.items})</span>
        <div className="cart" style={this.state.show}>
          <br></br>
          <button style={this.state.Back} onClick={this.goBack}>BACK</button>
          <h3>Cart : You Have {this.props.items} items in your cart</h3>
          {cart}
          {controller}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.Ammount,
    cart: state.cart,
    items: state.items
  }
}

export default connect(mapStateToProps)(Header);

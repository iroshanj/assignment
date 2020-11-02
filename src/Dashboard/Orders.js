import React from 'react';
class Orders extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  close = () => {
    this.props.closeCall();
  }

  render() {
    let store = this.state.orders;
    let arrOrder = [];
    let message=null;

    for (var i = 0; i < store.length; i++) {
      let collection = store[i].map((item) => {
        return (
          <li>{item.name} - Rs.{item.price}</li>
        )
      })

      arrOrder.push(<h3>Order-{i + 1}</h3>);
      arrOrder.push(collection);
    }

    if(arrOrder.length==0){
       message =<p>You have not placed any order yet</p>;
    }
    return (
      <div id="myModal" class="modal" style={this.props.show}>
        <div class="modal-content">
          <button onClick={this.close}>Close</button>
          <hr></hr>
         {message} 
          {arrOrder}
        </div>
      </div>
    )
  }

  componentDidMount() {
    let orders = JSON.parse(localStorage.getItem("orders") || "[]");
    this.setState({
      orders: orders
    })
  }
}

export default Orders;

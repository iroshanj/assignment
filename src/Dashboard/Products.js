import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';


class Products extends React.Component {

  render() {
    return (
      <div className="products">
        <Product products={this.props.products} />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(Products);

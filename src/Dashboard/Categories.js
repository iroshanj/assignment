import React from 'react';
import { connect } from 'react-redux';
import { replace } from '../Redux/Action';

class Categories extends React.Component {

  call = (e) => {
    let id = e.target.id;
    this.props.dispatch(replace(id))
  }

  render() {
    return (

      <div className="categories">
        <nav>
          <ul>
            <li id='RICE' onClick={this.call}>Rice</li>
            <li id='ROTI' onClick={this.call}>Roti</li>
            <li id='STARTER' onClick={this.call}>Starters</li>
            <li id='COLD' onClick={this.call}>Cold drink</li>
            <li id='HOT' onClick={this.call}>Hot drink</li>
            <li id='PUNJABI' onClick={this.call}>Punjabi dishes</li>
            <li id='CHINES' onClick={this.call}>Chines</li>
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category
  }
}

export default connect(mapStateToProps)(Categories);

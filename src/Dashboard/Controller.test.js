import React from 'react';
import { shallow } from 'enzyme';
import Controller from './Controller';
import { Provider } from 'react-redux';
import store from '../Redux/Store';

 

it("renders component", () => {
  const wrapper = shallow(<Provider store={store} ><Controller/> </Provider>);
  expect(wrapper).toBeTruthy();
});

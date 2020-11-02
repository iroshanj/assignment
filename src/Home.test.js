import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import Login from './Login';



it("renders without crashing", () => {
  shallow(<Home />);
});

it("renders logo", () => {
  const wrapper = shallow(<Home />);
  const logo = <p className='logo'>FOODERS</p>;
  expect(wrapper.contains(logo)).toEqual(true);
});

it("renders test for user", () => {
  const wrapper = shallow(<Home />);
  const logo =   <p className='logo-txt'>Lets order some deliciuos food of your choice at the door in easy steps </p>;
  expect(wrapper.contains(logo)).toEqual(true);
});

it("render login component ", () => {
  shallow(<Login />);
});

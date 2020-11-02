import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { createMemoryHistory } from 'history';


it("renders without crashing", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toBeTruthy();
});

it("renders username field", () => {
  const wrapper = shallow(<Login />);
  const input = wrapper.find(`[data-test="username"]`);
  expect (input.length).toBe(1);
});

it("renders password field", () => {
  const wrapper = shallow(<Login />);
  const input = wrapper.find(`[data-test="password"]`);
  expect (input.length).toBe(1);
});

it("renders login buton", () => {
  const wrapper = shallow(<Login />);
  const button = wrapper.find(`[data-test="login-button"]`);
  expect (button.length).toBe(1);
});

it("username field check", () => {
  const wrapper = shallow(<Login />);
  wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'ramya'}});
  expect(wrapper.state('username')).toEqual('ramya');
});

it("password field check", () => {
  const wrapper = shallow(<Login />);
  wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'ramya'}});
  expect(wrapper.state('password')).toEqual('ramya');
});

it("check login success", () => {
  const history = createMemoryHistory();
  history.push('/user');
  const wrapper = shallow(<Login history={history}/>);
  wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'ramya'}});
  wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'ramya'}});
  wrapper.find('[data-test="login-button"]').simulate('click');
  expect(wrapper.state('isLogIn')).toBe(true);
});




 
 
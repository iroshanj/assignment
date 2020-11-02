import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: {
        username: 'ramya',
        password: 'ramya'
      },
      username: '',
      password: '',
      isLogIn: false
    };
  }

  handleUsername = (e) => {
    let valUsername = e.target.value;
    this.setState({
      username: valUsername
    })
  }

  handlePassword = (e) => {
    let valPassword = e.target.value;
    this.setState({
      password: valPassword
    })
  }

  login = () => {
    let validUser = false;
    if (this.state.username == '' || this.state.password == '' || this.state.username != this.state.users.username || this.state.password != this.state.users.password ) {
      alert('Enter valid credentials')
    } else if (this.state.username == this.state.users.username && this.state.password == this.state.users.password) {
      this.setState({ isLogIn: true })
      this.props.history.push('/user');
    } 
  }



  render() {
    return (
      <form>
        <input data-test='username' type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleUsername}></input>
        <input data-test='password' type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}></input>
        <input data-test='login-button' type="button" value="Log In" onClick={this.login}></input>
      </form>
    )
  }

}

export default Login;

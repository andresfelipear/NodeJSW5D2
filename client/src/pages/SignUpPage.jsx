import { Component } from "react";
import axios from 'axios'

class SignUpPage extends Component {
  state = {
    username: '',
    email: '',
    password: undefined,
    confirmPassword: undefined,
    submitted: false
  };

  onChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  submit = async (event) => {
    event.preventDefault()
    const { username, email, password } = this.state
    console.log(this.state);
    const body = { username, email, password }
    axios.post('http://localhost:8000/api/user/signup', body).then(res => {
      if(res.data){
        this.setState({ submitted: true })
      }
    })
    // const res = await fetch('http://localhost:8000/api/user/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, email, password })
    // })
    // const data = await res.json()
    // console.log(data)

  }

  render() {
    let disabled = true;
    const { password, confirmPassword } = this.state;
    if (password && confirmPassword) {
      disabled = password !== confirmPassword;
    }
    return (
      <>
        <form>
          {this.state.submitted && <p role="alert">Signed up successfully</p>}
          <h1>Sign Up</h1>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={this.onChange} />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" onChange={this.onChange} />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={this.onChange} />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            onChange={this.onChange}
          />

          <button disabled={disabled} onClick={this.submit}>Sign Up</button>
        </form>
      </>
    );
  }
}

export default SignUpPage;

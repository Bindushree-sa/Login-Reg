import React, { Component } from "react";
//import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
      isPasswordShown:false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    console.log(email,password)
localStorage.setItem("user",JSON.stringify(this.state))
this.props.handleSuccessfulAuth(this.state)
    //axios.post( "http://localhost:8000/sessions",{user: {email: email, password: password}},{ withCredentials: true } )
     // .then(response => { console.log(response);if (response.data.logged_in) {  this.props.handleSuccessfulAuth(response.data);} })
      //   .catch(error => {console.log("login error", error);});
    event.preventDefault();
  }
  togglePasswordVisibility=()=>{
    const {isPasswordShown}=this.state;
    this.setState({
      isPasswordShown:!isPasswordShown
    });
  }
  
  render() {
    const {isPasswordShown}=this.state;
    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group text-left">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            autoComplete="off"
            required
          />
          </div>
          <div className="form-group text-left">
          <input
            type={(isPasswordShown)?"text":"password"}
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            autoComplete="off"
            required
          />
          </div>
          <div>
          <input type="checkbox" onClick={this.togglePasswordVisibility}></input>
          </div>
          <button  type="submit">Login</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
//import validator from 'validator'

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
 // validatePassword(value){ if (validator.isStrongPassword(value, {minLength: 8, minLowercase: 1,minUppercase: 1, minNumbers: 1, minSymbols: 1
   // })) {alert('Is Strong Password')} else {alert('Is Not Strong Password')}}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;
   // fetch('https://jsonplaceholder.typicode.com/posts', {
     // method: 'POST',
      //body: JSON.stringify({ title: email, body: password, }), headers: { 'Content-type': 'application/json; charset=UTF-8',},})
      event.preventDefault();
      if(password === password_confirmation) {
        axios
        .post(
          "http://localhost:8000/user",
          {
            user: {
                id:email,
              email: email,
              password: password,
              password_confirmation: password_confirmation
            }
          },
          { withCredentials: true }
        )
        .then(response => {
            console.log(response)
            console.log(response.request.statusText)
          if (response.request.statusText === "Created") {
            this.props.handleSuccessfulAuth(response.data);
          }
        })
        .catch(error => {
          console.log("registration error", error);
        });
        localStorage.setItem("user",JSON.stringify(this.state))
       
      } else {
      alert('Passwords do not match');
      }
      
  }
  
  validateForm() {
    return (
      this.state.email.length > 0 &&
     this.state.password.length > 0 &&
      this.state.password === this.state.password_confirmation
    );
  }

  render() {
    return (
      <div>
        <h3>Register</h3>
        <form 
        className="form-group text-left"
        onSubmit={this.handleSubmit}>
          <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          </div>
          <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            //onInput={e=>{this.validatePassword(e.target.value)}}
            required
          />
          </div>
          <div>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          </div>
          <div>
          <button type="submit" >Register</button>
          </div>
        </form>
      </div>
    );
  }
}
//npm install json-server
//npx json-server --watch data/db.json --port 8000
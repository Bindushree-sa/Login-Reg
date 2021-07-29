import React from "react";
import Login from "./Login";
import Registration from "./Registration";
//import axios from "axios"

export default class Home extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            loggedInStatus:""
        }
        this.handleSuccessfulAuth=this.handleSuccessfulAuth.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLogoutClick() {
       // axios .delete("http://localhost:3001/logout", { withCredentials: true })
        //  .then(response => { this.props.handleLogout(); })
        //  .catch(error => { console.log("logout error", error);});
        
        this.props.handleLogout();
      }
    
    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
      }
    render(){
        return(
            <div>
            <div>HomePage</div>
            <h1>HomePage Status:{this.props.loggedInStatus}</h1>
            <div>
           
            <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            <br />
            <button onClick={() => this.handleLogoutClick()}>Logout</button>
          
            </div>
            </div>
        )
    }
}
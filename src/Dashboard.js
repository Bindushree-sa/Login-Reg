import React from "react";

export default class Dashboard extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            loggedInStatus:""
        }
    }
    render(){
        return(
            <div>
            <div>Dashboard</div>
            

            <h1>Dashboard Status:{this.props.loggedInStatus}</h1>
            </div>
        )
    }
}
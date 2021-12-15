import React from 'react'
import './App.css';

class Card extends React.Component {
  render(){
    return (
        <div className ='card'>
          <h4>User Id: {this.props.data.id}</h4>
          <h4>Job Title: {this.props.data.jobTitleName}</h4>
          <h4>First Name: {this.props.data.firstName}</h4>
          <h4>Last Name: {this.props.data.lastName}</h4>
          <h4>Preferred Full Name: {this.props.data.preferredFullName}</h4>
          <h4>Region: {this.props.data.region}</h4>
          <h4>PhoneNumber: {this.props.data.phoneNumber}</h4>
          <h4>EmailAddress: {this.props.data.emailAddress}</h4>
          <button onClick ={()=> this.props.delete(this.props.data.id)}>Delete</button>
        </div>
    )
  }
}
export default Card;
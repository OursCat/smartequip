import React from 'react'

class AddUser extends React.Component {
    constructor(){
      super();
      this.state = {
        hide:true
      }
    }

    show(){
      this.setState({hide:!this.state.hide})
    }
    render(){
    return (
      <div>
        <a className ='addUserButton' onClick = {()=>{this.show()}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
          Add User
        </a>
        {this.state.hide ? '':
        <div className="form-style">
        <h1>Register New User</h1>
        <form onSubmit ={this.props.click}>
        <input type="text" placeholder="User Id" required/>
        <input type="text"placeholder="Job Title" />
        <input type="text" placeholder="First Name" />
        <input type="text"placeholder="Last Name" />
        <input type="text" placeholder="Preferred Full Name" />
        <input type="text"placeholder="Region" />
        <input type="text" placeholder="PhoneNumber" />
        <input type="text"placeholder="text Address" />
        <button>Submit</button>
        </form>
        </div>
        }
      </div>
    )
  }
}
export default AddUser;
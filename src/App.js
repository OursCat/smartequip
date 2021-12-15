import React from 'react'
import Info from './Info.js'
import AddUser from './AddUser'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      hide:true
    }
    this.delete = this.delete.bind(this)
  }

  componentDidMount(){
    //fetch data from jason-server
    fetch('http://localhost:5000/employees',{method:'GET'}).then(data => data.json()).then(item =>{
      //update the state
      this.setState({data:item})
    })
  }
  delete(item){
    fetch(`http://localhost:5000/employees/${item}`,{method:'DELETE'}).then(data => data.json()).then(item =>{
      fetch('http://localhost:5000/employees',{method:'GET'}).then(data => data.json()).then(item =>{
      this.setState({data:item})
    })

    })
  }
  handleSubmit(e){
    let id = e.target[0].value;
    let jobTitleName = e.target[1].value;
    let firstName = e.target[2].value;
    let lastName = e.target[3].value;
    let preferredFullName = e.target[4].value;
    let region = e.target[5].value;
    let phoneNumber = e.target[6].value;
    let emailAddress = e.target[7].value;
    let newUser = {
      id,jobTitleName,firstName,lastName,preferredFullName,region,phoneNumber,emailAddress
    }
    fetch(`http://localhost:5000/employees/`,{method:'POST', body:JSON.stringify(newUser), headers:{"Content-type": "application/json; charset=UTF-8"}}).then(()=>{
      fetch('http://localhost:5000/employees',{method:'GET'}).then(data => data.json()).then(item =>{
      this.setState({data:item})
    })
    })
  }
  render(){
    return (
      <div>
        <AddUser click = {this.handleSubmit.bind(this)}/>
        <Info data = {this.state.data} delete = {this.delete}/>
      </div>
    )
  }
}
export default App;

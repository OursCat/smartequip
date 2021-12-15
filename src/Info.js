import React from 'react'
import Card from './Card';

class Info extends React.Component {
  render(){
    return (
      <div className='container'>
        {this.props.data.map((item,index)=>{
          return <Card key ={index} data = {item} delete = {this.props.delete} />
        })}
      </div>
    )
  }
}
export default Info;
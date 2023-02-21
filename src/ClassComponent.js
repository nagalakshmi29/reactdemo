import React from 'react'

class ClassComponent extends React.Component{
  state={
    subjectname:"react",
    year:2003,
        inputValue:"",
        students:[
      {
        name:"anjali",
        age:19,
        gender:"female"
      },
      { 
        name:"pooja",
          age:20,
          gender:"female"
      },
      {
        name:"subhanjali",
        age:19,
        gender:"female"
      }
      ]
  }
  handleClick=()=>{
    console.log(this.state.inputvalue)
    this.setState({
         inputValue:" "
    })
  }
  handleChange=(e)=>{
    this.setState({
      inputValue:e.target.value
    })
  }
  render(){
    return(
      <div>
      <h2>Good Morning</h2>
      <p>{this.state.subjectname}</p>
      <p>{this.state.year}</p>
      {
        this.state.students.map((pos)=>(
                <div>
                <p>{pos.name}</p>
                <p>{pos.age}</p>
                <p>{pos.gender}</p>
                </div>
        ))
      }
            <input value={this.state.inputValue} onChange={this.handleChange}/>
      <button onClick={this.handleClick}>submit</button>
      </div>
    )
  }
}
export default ClassComponent
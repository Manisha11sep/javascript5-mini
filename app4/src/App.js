import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: []
    }

    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles').then(response => {
      this.setState({cars: response.data});
      console.log(this.state.cars);
    })
  }

  render() {
const carList = this.state.cars.map((car,index)=>{
  return(
  <div key = {index}> 
  <ul>{car.make} </ul>
  <p>{car.model} </p>
  <p>{car.year} </p>
  <p>{car.color} </p>
  </div>
  )
})
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {carList}
      </div>
    )
  }

}
export default App;

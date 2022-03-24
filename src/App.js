import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import Navbar from './components/navbar'
import React, { Component } from 'react'


class App extends Component  {
  state = {
    counter : [
        {id : 1 , value : 0},
        {id : 2 , value : 0},
        {id : 3 , value : 4}
    ]
};
onIncrement = counters => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(counters)
    counter[index] = {...counters};
    counter[index].value++ ;
    this.setState({counter});
        }

onDelete = CounterID =>{
    console.log("this is del  ")
    const counter = this.state.counter.filter(c => c.id !== CounterID)
    this.setState({counter})

}
onReset = () => {
    const counter = this.state.counter.map(c => {
        this.state.value = 0
        return c;
    });
    this.setState({counter})
    console.log(this.state.counter)
}
render(){
  return (
    <div>

    <Navbar 
      total_count = {this.state.counter.filter (c => c.value > 0 ).length}/>
    <main className = 'container'>
      <Counters
                counter = {this.state.counter}
                onIncremet = {this.onIncrement}
                onDelet = {this.onDelete}
                onRes = {this.onReset}
              />

    </main>
    </div>

  );
}
}
export default App;

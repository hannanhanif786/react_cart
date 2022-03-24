import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component{
    
    render(){
        return(
        <div>
            <button onClick={this.props.onRes} className='btn btn-secondary btn-sm m-2 '>
                reset
            </button>

            {this.props.counter.map((counter => (
            <Counter 
                key = {counter.id}
                ondel = {this.props.onDelet} 
                onInc = {this.props.onIncremet} 
                counter = {counter}  
                />)))}         
        </div>
        )
    }
}

export default Counters;
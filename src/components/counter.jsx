import React, { Component } from 'react'
class Counter extends Component {
    render() {
        return <React.Fragment>
            <h2>{this.props.id}</h2>
            <span className={this.getbadge()}>{this.formatcount()}</span>
            <button onClick={() => this.props.onInc(this.props.counter)  } className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => this.props.ondel(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>
                Delete
            </button>
            {/* <ul>
                {this.state.cars.map(car => <li key={car}>{car}</li>)}
            </ul> */}
        </React.Fragment>;
    }

    getbadge() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

formatcount() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }
}
export default Counter;
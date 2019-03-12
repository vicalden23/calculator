import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Square(props) {
  return (
    <button className={props.style} onClick={props.handleClick}>
      {props.value}
    </button>
  )
}

class Calculator extends Component {
  constructor(props) {
    super()

    this.state = {
      value: 0,
      current: []
    }
  }

  handleClick(value) {

    if (value === 'clear') {
      this.setState({
        value: 0,
        current: []
      })
    } else {
      let current = this.state.current
      if (value === '=') {
        value = eval(this.state.current.join(' '))
        current = [value]
      } else {
        current.push(value)
      }
      this.setState({
        value: value,
        current: current
      })
    }

  }

  renderSquare(value, style = 'number') {
    return (
      <Square
        style={style}
        value={value}
        handleClick={() => this.handleClick(value)}
      />
    )
  }

  render() {
    return (
      <div className="calculator">
        <div>
          <input className='screen' readOnly value={this.state.value} />
        </div>
          {this.renderSquare('clear', 'clear-button')}
          {this.renderSquare('/', 'operator')}
          {this.renderSquare('*', 'operator')}
        <div>
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare('-', 'operator')}
        </div>
        <div>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare('+', 'operator')}
        </div>
        <div>
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare('=', 'operator')}
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Calculator;

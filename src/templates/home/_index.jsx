import { Component } from 'react';
import './styles.css';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        np;
        console.log('PREV', prevState.counter);
        return { counter: prevState.counter + 1 };
      },
      () => {
        console.log('POST', this.state.counter);
      },
    );
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

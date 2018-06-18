import React, { Component as C } from 'react';
class Counter extends C {
  constructor(props) {
    super();
    const { stars } = props;
    this.state = { stars };
  }

  plus() {
  	const stars = +this.state.stars + 1;
  	this.setState({stars});
  }

  render() {
  	return (
   	<div>КОМПОНЕНТ
   	<button onClick = {() => this.plus()}>+</button>
   	<Stars length={this.state.stars}/></div>);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ stars: nextProps.stars });
  }
}

const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, i) => ++i).map(() => '⭐️').join('')}</span>;

export default Counter;
import React, { Component } from 'react';
//클래스형 컴포넌트
class Counter extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        {/*state의 값을 직접 변경하는 것은 불가능 */}
        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

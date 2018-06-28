import React, { Component } from 'react';
import './App.css';

class App extends Component { // 클래스 형태로 만들어진 컴포넌트에는 render함수가 필요하다.
  render() {

    return ( // 내부에서는 JSX를 리턴
      <div className="App">
        hello React!
      </div>
    );
  }
}

export default App;

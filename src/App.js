import React, { Component } from 'react';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component { // 클래스 형태로 만들어진 컴포넌트에는 render함수가 필요하다.
  render() {

    return ( // 내부에서는 JSX를 리턴
      <div>
        <MyName />
        <Counter />
      </div>
    );
  }
}

export default App;

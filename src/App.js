import React, { Component, Fragment } from 'react';

class App extends Component { // 클래스 형태로 만들어진 컴포넌트에는 render함수가 필요하다.
  render() {
    const style = {
      backgroundColor: 'black',
      color: 'white',
      fontSize: '15px',
      padding: '20px'
    };

    return ( // 내부에서는 JSX를 리턴
      <div style={style}>
        hello React!
      </div>
    );
  }
}

export default App;

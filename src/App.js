import React, { Component, Fragment } from 'react';

class App extends Component { // 클래스 형태로 만들어진 컴포넌트에는 render함수가 필요하다.
  render() {
    const value = 1;
    return ( // 내부에서는 JSX를 리턴
      <Fragment>
        <div>
          { // 조건부 렌더링을 할 때 주로 삼항연산자나 AND 연산자 사용.
            1+1 === 2 ? (<div>맞아요</div>) : (<div>틀려요</div>)
          }
        </div>
        <div>
          { // 조건부 렌더링을 할 때 주로 삼항연산자나 AND 연산자 사용.
            1 + 1 === 2 && (<div>맞아요!!</div>)
          }
        </div>
        <div>
          { // 조건부 렌더링을 할 때 if문 사용x. 사용하려면 즉시실행함수로 표현.
            (() =>{
              if(value === 1) return (<div>one</div>);
              if(value === 2) return (<div>two</div>);
            })()
          }
        </div>
      </Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    // 또다른 state 정의 방법
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    handleIncrease = () => {
        // this.setState({
        //     number: this.state.number + 1
        // });
        const {number} = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        // this.setState({
        //     number: this.state.number - 1
        // });
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        return(
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                {/* React는 JS와 달리 이벤트에 전달해주는 값이 함수여야 한다! 사용자가 만든 메소드를 호출하면 무한반복이 되버린다! */}
                <button onClick = {this.handleIncrease}> + </button>
                <button onClick = {this.handleDecrease}> - </button>
            </div>
        );
    }
}



export default Counter;
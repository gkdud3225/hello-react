import React, { Component } from 'react';

const Problematic = () => {
        throw (new Error('버그'));
        return (
            <div>
            </div>
        );
};

class Counter extends Component {
    state = {
        number: 0,
        error: false
    }

    // 또다른 state 정의 방법
    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentWillMount(){
        console.log('componentWillMount (depreated)');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        // 5의 배수면 리렌터링 하지 않음
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 == 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(nextProps, prevState){
        console.log('componentDidUpdate');
    }

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

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }

    render() {
        if(this.state.error) return (<h1>에러발생!</h1>);
        return(
            <div> 
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                { this.state.number === 4 && <Problematic /> }
                {/* React는 JS와 달리 이벤트에 전달해주는 값이 함수여야 한다! 사용자가 만든 메소드를 호출하면 무한반복이 되버린다! */}
                <button onClick = {this.handleIncrease}> + </button>
                <button onClick = {this.handleDecrease}> - </button>
            </div>
        );
    }
}



export default Counter;
import React, { Component } from 'react';

const MyName = ({name}) => {
    return(
        <div>
            안녕하세요. 제 이름은 <b>{name}</b>입니다.
        </div> 
    );
};


// class MyName extends Component {
//     static defaultProps = {
//         name: '기본이름'
//     }

//     render(){
//         return(
//            <div>
//                안녕하세요. 제 이름은 <b>{this.props.name}</b>입니다.
//            </div> 
//         );
//     }
// }

// 함수형 컴포넌트에서는 아래 방식 사용.
{/* 이렇게도 defaultProps 설정 가능 */}
MyName.defaultProps = {
    name: '기본이름'
}

export default MyName;
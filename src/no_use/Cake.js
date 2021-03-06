import React, { Component } from 'react'

class Cake extends Component {
    state = {
        price : 10000,
        discountPrice : 0
    }

    discount = () => {
        this.setState(
            current => ({//current = this.state
                discountPrice : current.price*0.7
            })
        );
    };

    render() {
        const {price,discountPrice} = this.state; //구조 분해 할당.
        return (
            <div>
                {/* <h1>치즈 케이크 가격은 {this.state.price} 입니다.</h1>
                <button onClick={this.discount}>할인</button>
                <h2>30% 할인 가격은 {this.state.discountPrice} 입니다.</h2> */}
                <h1>치즈 케이크 가격은 {price} 입니다.</h1>
                <button onClick={this.discount}>할인</button>
                <h2>30% 할인 가격은 {discountPrice} 입니다.</h2>
            </div>
        )
    }
}

export default Cake
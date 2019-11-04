import React, { Component } from 'react'
import Three from "./three"

export default class two extends Component {
    // sub3 在子级调用父级传来的函数
    changeCount=()=>{
        this.props.changeCount(2)
    }
    render() {
        return (
            <div>
                {/* 这是子级修改父级参数 */}
                二级{this.props.count}
                <button onClick={this.changeCount}>点击修改</button>
                {/* <Three>ccc</Three> 在三级页面显示 sub1*/}
                <Three/>
            </div>
        )
    }
}

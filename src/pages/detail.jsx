import React, { Component } from 'react'
import Child from "./child"

export default class detail extends Component {
    constructor(props){
        super(props)
        this.state={
            count:1
        }
    }
    changeNum=()=>{
        this.setState({
            count:this.state.count+1
        })
        // setState一些原理(是方法&是异步)
        // this.setState({
        //     count:this.state.count+1
        // })
        // console.log(this.state.count,'one')
        // setTimeout(()=>{
        //     this.setState({
        //         count:this.state.count+1
        //     })
        //     console.log(this.state.count,'two')
        // },0)
        // this.setState({
        //     count:this.state.count+1
        // })
        // this.setState({
        //     count:this.state.count+1
        // })
        // console.log(this.state.count,'three')
        // 1 'one'=>1 'three'=>render=>render=> 3 'two'
    }
    render() {
        console.log("render")
        return (
            <div>
                {/* <p>{this.state.count}</p> */}
                <Child count={this.state.count}/>
                <button onClick={this.changeNum}>点击修改</button>
            </div>
        )
    }
}

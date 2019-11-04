import React, { Component } from 'react'
import Two from "./two"
import Context from '../utils/context'
// console.log('context',Context) 1.Consumer组件 2.Provider组件

export default class one extends Component {
    constructor(props){
        super(props)
        this.state={
            three:{
                name:"任明明",
                age:10
            },
            count:1
        }
    }
    //sub4 count：是子级调用时的方法
    chageCount=(count)=>{
        this.setState({
            count
        })
    }
    render() {
        return (
            <div>
                一级
                {/* sub1 count：是页面显示的数字
                    sub2 changeCount:是传给子级的方法
                */}
                {/* <Context.Provider value={this.state.three}> */}
                    <Two count={this.state.count} changeCount={this.chageCount}/>
                {/* </Context.Provider> */}
            </div>
        )
    }
}

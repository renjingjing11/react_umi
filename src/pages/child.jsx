import React, { Component } from 'react'

export default class child extends Component {
    
    constructor(props){
        super(props)
        this.state={
            count:props.count
        }
        // console.log("constructor")
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
        return 1
    }
    componentDidUpdate(nextProps,nextState,count){
        console.log(count)
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps')
    //     console.log(props,"props")
    //     console.log(state,"state")
    //     return {
    //         count:props.count
    //     }
    // }

    // componentWillReceiveProps(nextProps){
    //     // console.log('componentWillReceiveProps')
    //     if(nextProps.count!==this.state.count){
    //         this.setState({
    //             count:nextProps.count
    //         })
    //     }
    // }
    render() {
        console.log("childRender")
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

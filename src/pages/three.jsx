import React, { Component } from 'react'
import Context from "../utils/context"

export default class three extends Component {
    render() {
        return (
            <div>
                三级
                <Context.Consumer>
                    {
                        (props)=>{
                            return <div>{props.name}</div>
                        }
                    }
                </Context.Consumer>
                {/* {this.props.children}  sub2必须写,要不页面上显示不出来,相当于插槽 首先把Consumer注释了 */}
            </div>
        )
    }
}

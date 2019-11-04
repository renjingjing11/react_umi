import React, { Component } from 'react'
import NavItem from "../../../component/navItem"
import styles from './will.css'
import Axios from 'axios';
export default class will extends Component {
    constructor(){
        super()
        this.state={
            navList:[],
            conList:[]
        }
    }
    render() {
        return (
            <div className={styles.will}>
                <div className={styles.nav}>
                    <div className={styles.most_expected}>
                        <p className={styles.title}>近期最受期待</p>
                        <NavItem navList={this.state.navList} />
                    </div>
                </div>
                <div className={styles.content}> 
                    {this.state.conList.map((item,index)=>{
                        return <div className={styles.con_item} key={index}>
                                    <div className={styles.item_date}>{item.comingTitle}</div>
                                    <div className={styles.item_con}>
                                        <div className={styles.item_left}>
                                            <img src={item.img.replace('w.h','128.180')} alt="" className={styles.item_img}/>
                                        </div>
                                        <div className={styles.item_right}>
                                        <div className={styles.item_right_left}>
                                            <div style={{flex:8,marginTop:'15px'}}>
                                                <p className={styles.item_nm}>{item.nm}</p>
                                                <p><span className={styles.item_wish}>{item.wish}</span>人想看</p>
                                                <p className={styles.item_star}>主演：{item.star}</p>
                                                <p className={styles.item_rt}>{item.rt}上映</p>
                                            </div>
                                            <div className={styles.buy}>
                                                {item.showst?<button style={{backgroundColor:'#3c9fe6',color:'#fff',border:'none',borderRadius: '4px',width: '47px',height: '27px'}}>预售</button>:<button>想看</button>}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
        )
    }
    componentDidMount(){    
        Axios.get("/api/ajax/mostExpected?ci=1&limit=10&offset=0&token=").then(res=>{
            let newList=res.data.coming.map((item,index)=>{
                if(item.comingTitle.includes('周')) {
                    item['comingTitle']=item.comingTitle.substring(0,item.comingTitle.length-2);
                    return item
                }
            })
                this.setState({
                navList:res.data.coming
            })
        })
        Axios.get('/api/ajax/comingList?ci=1&token=&limit=10').then(res=>{
            this.setState({
              conList:res.data.coming
            })
            console.log(this.state.conList)
          })
    }
}

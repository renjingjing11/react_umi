import React, { Component } from 'react';
import styles from './navItem.css';
import BScroll from 'better-scroll';
import axios from 'axios';
export default class navItem extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      navList:[],
      width:"",
      page: 10,
      x:''
    };
  }
  render() {
    return (
      <div className="itemBox" style={{ width: '100%', height: '216px', overflow: 'hidden' }}>
        <div style={{ display: 'flex',width:this.width }}>
          {this.state.navList&&this.state.navList.map((item, index) => {
            return (
              <div ref='doms' style={{width: '112px',height: '100%',lineHeight: '12px',fontSize: '12px',display: 'inline-block'}} key={index}>
                <div className={styles.img}>
                  <img src={item.img.replace('w.h', '128.108')} alt="" className={styles.img2} />
                  <p className={styles.wish}>{item.wish}想看</p>
                </div>
                <p className={styles.nm}>{item.nm}</p>
                <p className={styles.comingTitle}>{item.comingTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      navList: nextProps.navList,
    });
  }
  componentDidMount() {
    setTimeout(()=>{
      let w=Number(this.refs.doms.style.width.substring(0,3))
      this.width=(w*this.state.navList.length)+'px'
      // console.log(this.width)
    },1000)
    this.bs = new BScroll(document.querySelector('.itemBox'), {
      click: true, // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollX: true,
      probeType: 2,
    });
  }
  componentDidUpdate() {
    this.bs.on('scrollEnd', res => {  
      console.log(res)
      this.setState({
        x:res.x
      })
        this.setState({
          page: (this.state.page += 10),
        });
        // console.log(this.state.page)
        // axios
        //   .get(`/api/ajax/mostExpected?ci=1&limit=10&offset=${this.state.page}&token=`)
        //   .then(res => {
        //     console.log(res.data.coming);
        //     let arr = this.state.navList;
        //     arr.push(...res.data.coming);
        //     this.setState({
        //       navList: arr,
        //     });
        //     console.log(this.state.navList);
        //   });
    });
  }
}

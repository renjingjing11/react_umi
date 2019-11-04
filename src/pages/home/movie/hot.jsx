import React, { Component } from 'react';
import axios from 'axios';
import BScroll from 'better-scroll';
import styles from './hot.css';

export default class hot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotArr: [],
      movieIds:[]
    };
  }
  render() {
    return (
      <div className="hot" style={{ width: '100%', height: '600px' }}>
        <div>
          {this.state.hotArr.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <div className={styles.item_left}>
                  <p className={styles.item_left_img}>
                    <img
                      src={item.img.replace('w.h', '128.180')}
                      alt=""
                      className={styles.item_left_img2}
                    />
                  </p>
                </div>
                <div className={styles.item_mid}>
                  <div className={styles.mid_left}>
                    <div className={styles.item_nm}>{item.nm}</div>
                    <div className={styles.item_con}>
                      <div className={styles.item_sc}>观众影评：{item.sc}</div>
                      <div className={styles.item_star}>主演：{item.star}</div>
                      <div className={styles.item_showInfo}>{item.showInfo}</div>
                    </div>
                  </div>
                  <div className={styles.mid_right}>
                    {item.globalReleased ? (
                      <button className={styles.mid_btn}>购票</button>
                    ) : (
                      <button className={styles.mid_btn2}>预售</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios.get('/api/ajax/movieOnInfoList?token=').then(res => {
      console.log(res)
      this.setState({
        hotArr: res.data.movieList,
        movieIds: res.data.movieIds,
      });
    })
    this.bs = new BScroll(document.querySelector('.hot'), {
      click: true, // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true,
      probeType: 1,
    });
  }
  componentDidUpdate() {
    this.bs.on('scroll', res => {
      if (res.y < -768) {
        setTimeout(() => {
          let allId = this.state.movieIds.splice(this.state.hotArr.length + 1, 9);
          console.log(allId)
          axios.get(`/api/ajax/moreComingList?token=&movieIds=${this.state.movieIds[this.state.hotArr.length]}%2C${allId.join('%2C')}`).then(res => {
            let arr=this.state.hotArr
            arr.push(...res.data.coming)
            this.setState({
                hotArr:arr
            })
          });
        }, 1000);
      }
    });
  }
}

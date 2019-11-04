import styles from "./index.css"
import Link from "umi/link"
export default function(props){
    return(
        <div className={styles.movie}>
            <div className={styles.header}>
                <div className={styles.address}>北京</div>
                <Link className={styles.hot} to='/home/movie/hot'>正在热映</Link>
                <Link className={styles.will} to='/home/movie/will'>即将上映</Link>
                <div className={styles.search}>搜索</div>
            </div>
            <div className={styles.main}>{props.children}</div>
        </div>
    )
}
import styles from "./index.css"
import Link from "umi/link"
import Redirect from 'umi/redirect'
export default function(props){
    return(
        <div className={styles.movie}>
            <div className={styles.main}>{props.children}</div>
            <Redirect from='/home/movie' to='/home/movie/hot'></Redirect>
        </div>
    )
}
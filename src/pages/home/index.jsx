import styles from "./index.css"
import Redirect from 'umi/redirect'
export default function(props){
    return(
        <div className={styles.home}>
            <Redirect from='/home' to='/home/movie'></Redirect>
        </div>
    )
}

import styles from './_layout.css'
import Link from 'umi/link'
export default function(props){
    return (
        <div className={styles.global}>
        <div className={styles.header}>猫眼电影</div>
        <div className={styles.main}>
            {props.children}
        </div>
        <div className={styles.footer}>
                <Link className={styles.left} to='/home/movie'>电影</Link>
                <Link className={styles.mid} to='/home/cinema'>影院</Link>
                <Link className={styles.right} to='/my'>我的</Link>
            </div>
        </div>
    )
}
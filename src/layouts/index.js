import styles from "./index.css"
export default function(props){
    return (
        <div class={styles.home}>
            {props.children}
        </div>
    )
}
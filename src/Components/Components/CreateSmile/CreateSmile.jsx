import React from "react"
import styles from "./CreateSmile.module.scss"

function CreateSmile(props) {
    return <button className={styles.btn__vote} onClick={props.handleClick}>{props.title}</button>
}
export default CreateSmile
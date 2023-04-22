import React from "react";
import styles from "./ImageSmiles.module.scss"

function ImageSmiles (props) {
    return <img src={props.src} className={styles.img} alt="#" />
}
export default ImageSmiles
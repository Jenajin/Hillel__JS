import styles from "./Button.module.scss"

export const Button = ({title, action, id, dispatchFunc}) => {

    const handleCreate = () => {
        dispatchFunc({type: action, payload: id})
    }

    return (
        <button className={styles.btn} onClick={handleCreate}>{title}</button>
    )
}
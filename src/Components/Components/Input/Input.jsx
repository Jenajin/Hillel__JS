import styles from "./Input.module.scss"

export const Input = ({dispatchFunc, action, id, selected}) => {
    
    const handleCreate = () => {
        dispatchFunc({type: action, payload: id})
    }

    return (
        <div className={styles.wrap}>
            <input className={styles.inp} type="checkbox" checked={selected} onChange={handleCreate}/>
        </div>
    )
}
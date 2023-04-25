import { useState } from "react"
import styles from "./CreateTodoItem.module.scss"

const CreateTodoItem = ({addTodo}) => {
    const [value, setValue] = useState('')

    const getValue = (value) => {
        if(!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <div className={styles.wrap}>
            <input type="text" onChange={e => setValue(e.target.value)}/>
            <button onClick={e => getValue(value)}>add</button>
        </div>
    )
}

export default CreateTodoItem
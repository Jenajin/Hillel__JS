import styles from "./TodoItem.module.scss"

const TodoIem = ({ id, title, checkTodo, delTodo }) => {

    return (
        <div className={styles.wrap}>
            <div>
                <input type="checkbox" onChange={(e) => checkTodo(e.target.checked, id)} />
                {title}
            </div>
            
            <button onClick={e => delTodo(id)}>delete</button>
        </div>
    )
}

export default TodoIem
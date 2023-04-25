import React from "react"
import { useEffect, useState } from "react";
import styles from "./TodoWrap.module.scss";
import fetchData from "./Components/fetchData/fetchData";
import TodoIem from "./Components/TodoItem/TodoItem";
import CreateTodoItem from "./Components/CreateTodoItem/CreateTodoItem";


const TodoWrap = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData()
            setData(result)
        }
        getData()
    }, [])


    const checkTodo = (completed, id) => {
        const copyData = data.slice()
        copyData.forEach(el => {
            if (el.id === id) {
                el.completed = completed
                console.log(el.completed) // перевірка
            }
        })
        setData(copyData)
    }

    const addTodo = (value) => {
        console.log(value) // перевірка
        const copyData = data.slice()
        const todo = {
            "userId": 1,
            "id": Math.random(),
            "title": value,
            "completed": false
        }
        copyData.push(todo)
        setData(copyData)
    }

    const delTodo = (id) => {
        setData(data.filter(el => el.id !== id))
    }


    return (
        <div >

            <div className={styles.wrap}>
                {data.map((el) => (
                    <TodoIem key={el.id}
                        id={el.id}
                        title={el.title}
                        checkTodo={checkTodo}
                        delTodo={delTodo} />
                ))}
            </div>



            <CreateTodoItem addTodo={addTodo} />
        </div>
    )
}

export default TodoWrap
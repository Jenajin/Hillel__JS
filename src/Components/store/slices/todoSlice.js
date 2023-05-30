import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const getTodos = createAsyncThunk(
    'todoSlice/getTodos',
    async (el, { dispatch }) => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos/')
            const result = await response.json()
            dispatch(setTodos(result))
        } catch (err) {
            console.log(err)
        }
    }
)

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        deleteTodo: (state, action) => {
            const id = action.payload
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        addTodo: (state, action) => {
            const todo = {
                userId: Math.random(),
                id: Math.random(),
                title: action.payload,
                completed: false,
            }
            state.todos = [...state.todos, todo]
        },
        toggleTodo: (state, action) => {
            const id = action.payload
            console.log(id)
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed
            }
        },
    }
})


export const { setTodos, deleteTodo, addTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
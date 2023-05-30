import * as React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodos } from "../../store/slices/todoSlice"
import { TodoItem } from "./Components/TodoItem/TodoItem"
import { createSelector } from "reselect"
import { CreateNewItem } from "./Components/CreateNewItem/CreateNewItem"
import { Box } from "@mui/system"
import styled from "@emotion/styled"


const selectTodos = createSelector(
    state => state.todos.todos,
    todos => todos
)

export const TodoList = () => {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(getTodos())
        }, [])

    return (
        <Container>

            <BoxWrap>
                {todos.map((el) => (
                    <TodoItem key={el.id} title={el.title} id={el.id} />
                ))}

            </BoxWrap>

                <CreateNewItem />
        </Container>
    )
}

const Container = styled('div')({
    maxWidth: "1400px",
    marginInline: "auto",
})

const BoxWrap = styled(Box)({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "20px",
})

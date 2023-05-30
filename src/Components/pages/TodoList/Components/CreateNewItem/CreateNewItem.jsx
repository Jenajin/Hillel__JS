import * as React from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../../../store/slices/todoSlice"
import { Box, Button, Input, styled } from "@mui/material"

export const CreateNewItem = () => {
    const [value, setValue] = useState('')

    const state = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()


    const handleAddTodo = (value) => {
        if (!value) return
        dispatch(addTodo(value))
        setValue('')
    }

    return (
        <BoxWrap>
            <Input type="text" onChange={e => setValue(e.target.value)} />
            <Button variant="outlined" onClick={() => handleAddTodo(value)}>add</Button>
        </BoxWrap>)
}

const BoxWrap = styled(Box)({
    display: "flex",
    gap: "20px",
    width: "max-content",
    margin: "40px auto"
})
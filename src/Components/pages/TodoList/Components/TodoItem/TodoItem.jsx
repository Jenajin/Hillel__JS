import * as React from "react";
import { List, Button, styled, Switch } from "@mui/material"
import { Box } from "@mui/system"
import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../../../../store/slices/todoSlice"


export const TodoItem = ({ title, id }) => {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))

    }

    const handleSwitchChange = () => {
        dispatch(toggleTodo(id))
    }

    return (
        <ListWrap>

            <Box>
                <Switch onChange={handleSwitchChange} />
                {title}
            </Box>

            <Button variant="contained" size="small" onClick={() => handleDelete(id)}>Delete</Button>

        </ListWrap>
    )
}

const ListWrap = styled(List)({
    display: "flex",
    alignItems: "center",
    gap: "20px"
})
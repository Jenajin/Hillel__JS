import * as React from "react";
import { Link, List, ListItem } from "@mui/material"
import { Box, styled } from "@mui/system"
import { Outlet } from "react-router-dom"
import { Link as RouterLink } from 'react-router-dom'



export const Layout = () => {

    return (
        <>
            <Box>
                <ListWrap component="nav">
                    <ListItem>
                        <LinkStyled
                            variant="h3"
                            component={RouterLink}
                            to="/">
                            Home Page
                        </LinkStyled>
                    </ListItem>

                    <ListItem>
                        <LinkStyled
                            variant="h3"
                            component={RouterLink}
                            to="/todos">
                            Todos
                        </LinkStyled>
                    </ListItem>
                </ListWrap>
            </Box>

            <Outlet />
        </>
    )
}

const ListWrap = styled(List)({
    display: "flex",
})

const LinkStyled = styled(Link)({
    margin: "0 auto",
    textDecorationLine: "none",
    color: "#1976d2",
    '&:hover': {
        color: "blue"
    },
})

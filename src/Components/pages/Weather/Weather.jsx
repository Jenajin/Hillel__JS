import React, { useEffect } from "react";
import { getLocation, getWeather } from "../../store/slices/weatherApp";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Box, Button, Input, List, styled } from "@mui/material";
import { useCallback } from "react";


export const Weather = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')
    const weather = useSelector(state => state.weather.weather)

    const handleAddCity = useCallback(() => {
        if (!city) return
        dispatch(getLocation(city))
        setCity('')
    }, [city])


    return (

        <Container>

            <Box>
                <Input type="text" onChange={e => setCity(e.target.value)} />
                <Button variant="outlined" onClick={() => handleAddCity(city)}>add</Button>
            </Box>

            {weather && (
                <ListWrap>
                    {weather.main && (
                        <>
                            <div>Місто: {weather.name}</div>
                            <div>Температура: {weather.main.temp}°C</div>
                            <div>Тиск: {weather.main.pressure}</div>
                            <div>Опис: {weather.weather[0].description}</div>
                            <div>Вологість: {weather.main.humidity}</div>
                            <div>Швидкість вітру: {weather.wind.speed}</div>
                            <div>Напрям вітру: {weather.wind.deg}°</div>
                            {weather.weather[0].icon && (
                                <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather Icon" />
                            )}
                        </>
                    )}
                </ListWrap>
            )}
        </Container>
    )
}

const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px"
})

const ListWrap = styled(List)({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "40px"
})

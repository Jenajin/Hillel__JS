import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather: {}
}

export const getLocation = createAsyncThunk(
    'weatherApp/getLocation',
    async (city, { dispatch }) => {
        try {
            let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},UA&limit=1&appid=6c46887df60c2987d19830625afdd87f`)
            const result = await response.json()
            console.log(result)

            dispatch(getWeather({ lat: result[0].lat, lon: result[0].lon }))
        }
        catch (err) {
            console.log(err)
        }
    }
)


export const getWeather = createAsyncThunk(
    'weatherApp/getWeather',
    async ({ lat, lon }, { dispatch }) => {
        console.log({ lat, lon })
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6c46887df60c2987d19830625afdd87f&units=metric`)
            const result = await response.json()

            console.log(result)
            dispatch(setWeather(result))
        }
        catch (err) {
            console.log(err)
        }
    }
)


export const weatherApp = createSlice({
    name: 'weatherAppSlice',
    initialState,
    reducers: {
        setWeather: (state, action) => {
            state.weather = action.payload
        }

    }
})


export const { setWeather } = weatherApp.actions
export default weatherApp.reducer
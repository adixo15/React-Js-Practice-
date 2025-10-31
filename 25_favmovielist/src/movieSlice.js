import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: [
        { id: 1, title: "inception", watched: false },
        { id: 2, title: "it", watched: true }
    ],
    reducers: {
        addMovie: (state, action) => {
            state.push({ id: Date.now(), title: action.payload, watched: false })
        },
        toggleWatched: (state, action) => {
            const movie = state.find((m) => m.id === action.payload);
            if (movie) movie.watched = !movie.watched;
        },
        deleteMovie:(state,action)=>{
            return state.filter((m)=>m.id !==action.payload)
        }
    }
});

export const { addMovie, toggleWatched,deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHabits = createAsyncThunk('habits/fetchHabits', async () => {
    const res = await fetch('http://localhost:5000/api/habits');
    return res.json();
});

const habitSlice = createSlice({
    name: 'habits',
    initialState: { habits: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHabits.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchHabits.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.habits = action.payload;
            });
    }
});

export default habitSlice.reducer;

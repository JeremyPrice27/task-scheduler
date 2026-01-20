import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [
        { id: 0, description: 'Learn React hooks', dueDate: '2025-02-15', completed: true },
        { id: 1, description: 'Build a task table component', dueDate: '2025-03-01', completed: false },
        { id: 2, description: 'Style the table with CSS', dueDate: '2025-03-10', completed: false },
    ],
    status: 'idle',
    error: null,
};

const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        setData(state, action) {
            state.data.push(action.payload);
        },
    }
});

export const setTaskListItem = createAsyncThunk(
    'taskList/put',
    async (data, { dispatch }) => {
        dispatch(setData(data));
    }
);

export const selectTaskList = ({ taskList }) => taskList.data;

export const { setData } = taskListSlice.actions;

export default taskListSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: [
        { id: '001', description: 'Import React hooks', dueDate: '2025-02-15', completed: true },
        { id: '002', description: 'Build a task table component', dueDate: '2025-03-01', completed: true },
        { id: '003', description: 'Refactor CSS to SASS', dueDate: '2025-03-10', completed: false },
    ],
    status: 'idle',
    error: null,
};

const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        setData: {
            reducer(state, action) {
                state.data.push(action.payload);
            },
            prepare(payload) {
                const id = uuidv4();
                return { payload: { ...payload, id } }
            }
        },
        removeTask(state, action) {
            const taskId = action.payload;
            const index = state.data.findIndex(task => task.id === taskId);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
        },
        completeTask(state, action) {
            const task = state.data.find(task => task.id === action.payload);
            if (task) {
                task.completed = true;
            }
        }
    }
});

export const setTaskListItem = createAsyncThunk(
    'taskList/put',
    async (data, { dispatch }) => {
        dispatch(setData(data));
    }
);

export const selectTaskList = ({ taskList }) => taskList.data;

export const { completeTask, removeTask, setData } = taskListSlice.actions;

export default taskListSlice.reducer;

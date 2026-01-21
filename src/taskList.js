import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: [
        { id: '001', description: 'Import React hooks', dueDate: '2025-02-15', completed: true },
        { id: '002', description: 'Build a task table component', dueDate: '2025-03-01', completed: true },
        { id: '003', description: 'Refactor CSS to SASS', dueDate: '2025-03-10', completed: false },
        { id: '004', description: 'Refactor Slices', dueDate: '2025-01-07', completed: false },
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
                if (action.payload.id) {
                    const index = state.data.findIndex(task => task.id === action.payload.id);
                    if (index !== -1) {
                        state.data[index] = action.payload;
                        return;
                    }
                } else {
                    action.payload.id = uuidv4();
                    state.data.push(action.payload);
                }
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
        },
        reopenTask(state, action) {
            const task = state.data.find(task => task.id === action.payload);
            if (task) {
                task.completed = false;
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

export const selectTaskList = ({ taskList }) => {
    const sortedTasks = [...taskList.data]; 
    
    sortedTasks.sort((a, b) => {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });

    return sortedTasks
};

export const { completeTask, removeTask, reopenTask, setData } = taskListSlice.actions;

export default taskListSlice.reducer;

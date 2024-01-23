import { configureStore,createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo(state,action){
            state.push(action.payload);
            localStorage.setItem('todo',JSON.stringify(state));
        },
        deleteTodo(state,action){
            const index = state.findIndex((item)=>item.id === action.payload.id);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem('todo',JSON.stringify(state));
        },
        toggleStatus(state,action){
            const index = state.findIndex((item)=>item.id === action.payload.id);
            if(index!==-1){
                state[index].isCompleted = !state[index].isCompleted;
            }
            localStorage.setItem('todo',JSON.stringify(state));
        },
        replaceTodo(state,action){
            return action.payload;
        }
    }
})

export const store = configureStore({
    reducer: todoSlice.reducer
})

export const actions = todoSlice.actions;
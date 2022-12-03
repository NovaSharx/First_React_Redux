import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [
                ...state.items,
                action.payload
            ]}
        },
        clearTodos: () => {
            return { items: [] }
        },
        clearItem: (state, action) => {
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        }
    }
})

export const { addTodo, clearTodos, clearItem } = todoSlice.actions

export default todoSlice.reducer
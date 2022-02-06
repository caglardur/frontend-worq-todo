import { createSlice } from "@reduxjs/toolkit"

export const TaskReducer = createSlice({
  name: "tasks",
  initialState: {
    value: []
  },
  reducers: {
    setAllTasks: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setAllTasks } = TaskReducer.actions

export default TaskReducer.reducer

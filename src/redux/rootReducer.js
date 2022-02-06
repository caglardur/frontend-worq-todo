import { configureStore } from "@reduxjs/toolkit"

import TaskReducer from "./taskReducer"

export default configureStore({
  reducer: {
    tasks: TaskReducer
  }
})

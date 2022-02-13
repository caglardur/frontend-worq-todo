import axios from "axios"

import { setAllTasks } from "../taskReducer"

export const GetAllTasksAction = () => {
  return async dispatch => {
    try {
      const { data } = await axios(process.env.REACT_APP_DB_HOST)
      if (data) {
        data.sort((a, b) => {
          if (new Date(a.posting_date) > new Date(b.posting_date)) {
            return -1
          }
          if (new Date(a.posting_date) < new Date(b.posting_date)) {
            return +1
          }
          return 0
        })
        data.sort((a, b) => {
          if (a.is_completed < b.is_completed) {
            return -1
          }
          if (a.is_completed > b.is_completed) {
            return +1
          }
          return 0
        })
      }
      dispatch(setAllTasks(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const AddTaskAction = ({ title, description }) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(process.env.REACT_APP_DB_HOST, { title, description })
      if (data) {
        dispatch(GetAllTasksAction())
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export const EditTaskAction = ({ taskId, title, description, is_completed }) => {
  return async dispatch => {
    try {
      if (is_completed) {
        const { data } = await axios.put(process.env.REACT_APP_DB_HOST + taskId, { is_completed })
        if (data) {
          dispatch(GetAllTasksAction())
        }
      } else {
        const { data } = await axios.put(process.env.REACT_APP_DB_HOST + taskId, { title, description })
        if (data) {
          dispatch(GetAllTasksAction())
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
}

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
          if (a.is_complated < b.is_complated) {
            return -1
          }
          if (a.is_complated > b.is_complated) {
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
      console.log(err.message)
    }
  }
}

export const EditTaskAction = ({ taskId, title, description, is_complated }) => {
  return async dispatch => {
    try {
      if (is_complated) {
        const { data } = await axios.put(process.env.REACT_APP_DB_HOST + taskId, { is_complated })
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
      console.log(err.message)
    }
  }
}

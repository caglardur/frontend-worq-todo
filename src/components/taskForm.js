import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

import { AddTaskAction, EditTaskAction } from "../redux/action/taskAction"

const TaskForm = () => {
  const [task, setTask] = useState(null)
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [invalidTitle, setInvalidTitle] = useState(false)
  const [invalidDesc, setInvalidDesc] = useState(false)
  const dispatch = useDispatch()
  const { taskId } = useParams()
  const navigate = useNavigate()
  const tasks = useSelector(state => state.tasks.value)

  useEffect(() => {
    if (taskId) {
      const thisTask = tasks.filter(task => task.id === taskId)
      setTask(thisTask[0])
      setTitle(thisTask[0].title)
      setDescription(thisTask[0].description)
    } else {
      setTask(null)
      setDescription(null)
      setTitle(null)
    }
  }, [taskId, tasks])

  const formHandler = e => {
    e.preventDefault()
    if (title.trim().length === 0) {
      setInvalidTitle(true)
    } else if (description.trim().length === 0) {
      setInvalidDesc(true)
    } else if (task) {
      dispatch(EditTaskAction({ taskId, title, description }))
      navigate("/")
      setInvalidTitle(false)
      setInvalidDesc(false)
    } else {
      dispatch(AddTaskAction({ title, description }))
      navigate("/")
      setInvalidTitle(false)
      setInvalidDesc(false)
    }
  }
  return (
    <div className="col m-2 p-2 shadow-sm  bg-light" style={{ fontSize: "12px" }}>
      <form className="col" onSubmit={formHandler}>
        <div className="col text-center fs-5 fw-bold">{taskId ? "edit task" : "add task"}</div>
        <div className="col mb-2 p-2">
          <input className={invalidTitle ? "form-control is-invalid" : "form-control"} placeholder="title" id="titleArea" defaultValue={title} maxLength={50} onChange={e => setTitle(e.target.value)} required />
          <div className="invalid-feedback">Please enter a valid title.</div>
        </div>
        <div className="col mb-2 p-2">
          <textarea className={invalidDesc ? "form-control is-invalid" : "form-control"} placeholder="description" id="descriptionArea" style={{ height: "100px" }} defaultValue={description} onChange={e => setDescription(e.target.value)} required />
          <div className="invalid-feedback">Please enter a valid description.</div>
        </div>
        <div className="col-12 mb-2 p-2 d-flex justify-content-end">
          <button type="button" className="btn btn-sm btn-secondary mx-2 d-flex justify-content-center align-items-center" onClick={() => navigate("/")}>
            <span className="material-icons fs-5 fw-bold">clear</span>
          </button>
          <button type="submit" className="btn btn-sm btn-primary d-flex justify-content-center align-items-center">
            <span className="material-icons fs-5 fw-bold">save</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm

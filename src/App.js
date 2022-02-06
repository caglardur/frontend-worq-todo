import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"

import Footer from "./components/footer"
import Header from "./components/header"
import TaskForm from "./components/taskForm"
import TaskList from "./components/taskList"

import { GetAllTasksAction } from "./redux/action/taskAction"

const App = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.value)

  useEffect(() => {
    dispatch(GetAllTasksAction())
  }, [dispatch])

  return (
    <div className="container mt-5" style={{ maxWidth: "540px" }}>
      <Header />
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} />} />
        <Route path="/taskform/" element={<TaskForm />} />
        <Route path="/taskform/:taskId" element={<TaskForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

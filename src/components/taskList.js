import { useState } from "react"

import SingleTask from "./singleTask"

const TaskList = ({ tasks }) => {
  const [showDetail, setShowDetail] = useState(null)
  return (
    <div className="col">
      {tasks ? (
        tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div className="col m-2 p-2 shadow-sm bg-light" key={index}>
              <SingleTask task={task} showDetail={showDetail} setShowDetail={setShowDetail} />
            </div>
          ))
        ) : (
          <div className="col m-2 p-2 shadow-sm text-center bg-light">task not found</div>
        )
      ) : (
        <div className="col d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskList

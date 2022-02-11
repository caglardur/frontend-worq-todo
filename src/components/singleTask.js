import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { EditTaskAction } from "../redux/action/taskAction"

const SingleTask = ({ task, showDetail, setShowDetail }) => {
  const monthString = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "OCT", "DEC"]
  const dispatch = useDispatch()

  const taskYear = new Date(task.posting_date).getFullYear()
  const taskMonth = new Date(task.posting_date).getMonth()
  const taskDay = new Date(task.posting_date).getDate()
  const taskHour = new Date(task.posting_date).getHours()
  const taskMinute = new Date(task.posting_date).getMinutes()

  const updateYear = new Date(task.updating_date).getFullYear()
  const updateMonth = new Date(task.updating_date).getMonth()
  const updateDay = new Date(task.updating_date).getDate()
  const updateHour = new Date(task.updating_date).getHours()
  const updateMinute = new Date(task.updating_date).getMinutes()

  return (
    <div className="col p-2">
      <div type="button" className="row d-flex justify-content-between align-items-center" onClick={() => (showDetail === task.id ? setShowDetail(null) : setShowDetail(task.id))}>
        <div className="col-auto d-flex justify-content-center">
          {task.is_complated ? (
            <span className="material-icons text-success" style={{ color: "yellow" }}>
              check_circle
            </span>
          ) : (
            <span className="material-icons text-warning">watch_later</span>
          )}
        </div>
        <div className="col overflow-auto">
          <div className="col fs-6 fw-bold ps-0" style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
            {task.title}
          </div>
        </div>

        <div className="col-auto d-flex justify-content-center align-items-center" style={{ fontSize: "11px", color: "grey" }}>
          {taskDay + " " + monthString[taskMonth]}
          <span className="material-icons fs-6 ps-1">today</span>
        </div>
      </div>
      {showDetail === task.id && (
        <div className="col">
          <div className="row my-2">
            <div className="col my-2 py-2 px-5" style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
              {task.description}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col" style={{ fontSize: "10px", color: "grey" }}>
              <div className="col">CREATED: {taskDay + " " + monthString[taskMonth] + " " + taskYear + " " + taskHour + ":" + taskMinute}</div>
              {task.updating_date && <div className="col">{task.is_complated ? "COMPLETED: " + updateDay + " " + monthString[updateMonth] + " " + updateYear + " " + updateHour + ":" + updateMinute : "UPDATED: " + updateDay + " " + monthString[updateMonth] + " " + updateYear + " " + updateHour + ":" + updateMinute}</div>}
            </div>
            <div className="col">
              {task.is_complated === false && (
                <div className="col my-2 d-flex justify-content-end">
                  <Link to={"/taskform/" + task.id}>
                    <button type="button" className="btn btn-sm btn-outline-secondary mx-2 d-flex justify-content-center align-items-center">
                      <span className="material-icons fs-5 fw-bold">edit</span>
                    </button>
                  </Link>
                  <button type="button" className="btn btn-sm btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target={"#modal" + task.id}>
                    <span className="material-icons fs-5 fw-bold">done</span>
                  </button>

                  <div className="modal fade" id={"modal" + task.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content">
                        <div className="modal-body">Are you sure?</div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">
                            No
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                              dispatch(EditTaskAction({ taskId: task.id, is_complated: true }))
                              setShowDetail(null)
                            }}
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleTask

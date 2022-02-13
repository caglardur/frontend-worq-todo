import { useState, useEffect } from "react"

import SingleTask from "./singleTask"

const TaskList = ({ tasks }) => {
  const [showDetail, setShowDetail] = useState(null)
  const [nowPage, setNowPage] = useState(0)
  const [sliceTaskList, setSliceTaskList] = useState(tasks.slice(nowPage * 10, nowPage * 10 + 10))
  const [pages, setPages] = useState(Math.ceil(tasks.length / 10))

  console.log(tasks)

  useEffect(() => {
    setSliceTaskList(tasks.slice(nowPage * 10, nowPage * 10 + 10))
    setPages(Math.ceil(tasks.length / 10))
  }, [nowPage, tasks])

  const pageArray = []
  for (let int = 1; int <= pages; int++) {
    pageArray.push(int)
  }

  return (
    <div className="col">
      {sliceTaskList ? (
        sliceTaskList.length > 0 ? (
          sliceTaskList.map((task, index) => (
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
      <div className="col d-flex justify-content-center my-2">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center" id="pages">
            {pages > 1 &&
              pageArray.map(pg => (
                <li key={pg} className={pg - 1 === nowPage ? "page-item active" : "page-item"} style={{ cursor: "pointer" }}>
                  <div
                    className="page-link"
                    onClick={() => {
                      setShowDetail(null)
                      setNowPage(pg - 1)
                    }}
                  >
                    {pg}
                  </div>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TaskList

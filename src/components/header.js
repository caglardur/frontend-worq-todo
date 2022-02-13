import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="col p-2 m-2">
      <div className="row align-items-center">
        <div className="col fs-4 fw-bold">
          <Link to="/">task list</Link>
        </div>
        <div className="col-auto">
          <Link to="/taskform">
            <button type="button" className="btn btn-sm bg-danger bg-gradient d-flex justify-content-center align-items-center text-white">
              <i className="col-auto material-icons pe-0" style={{ fontSize: "22px" }}>
                add
              </i>
              <div className="col">add task</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header

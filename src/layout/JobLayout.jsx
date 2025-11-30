import { Outlet } from "react-router-dom"

const JobLayOut = () => {
  return (
    <div>
        <h2>Job Openings</h2>
        <p>List of Current Job Opening in Our Company.</p>
        <Outlet />
    </div>
  )
}

export default JobLayOut
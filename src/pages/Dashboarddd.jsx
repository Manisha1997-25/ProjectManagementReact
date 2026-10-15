import React, { useEffect, useState } from 'react'
import { deleteProject, getAllProjects } from '../api/projectAPI'

const Dashboarddd = () => {
    const [projects, setProjects] = useState([])
    const [status, setStatus] = useState({})

    const handleChange = (e) => {
        setStatus(e.target.value)
    }

    async function fetchData() {
        const projectsD = await getAllProjects()
        setProjects(projectsD)
    }

    async function handleDelete(ID) {
        const pDelete = await deleteProject(ID)
        alert(pDelete)

        fetchData()
    }
    useEffect(() => {
        fetchData()
    }, [projects])

    console.log(projects)
    return (

        <>
            <div>
                {/* search and filter */}
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Project Name(Details)</th>
                            <th scope='col'>Department</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Start Date</th>
                            <th scope='col'>End Date</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects?.map((p, i) => (
                            <tr key={p.id}>
                                <th scope="col">#</th>
                                <th scope='col'>{p.ProjectName}</th>
                                <th scope='col'>{p.Department}</th>
                                <th scope='col'>{p.priority}</th>
                                <th scope='col'>Start Date</th>
                                <th scope='col'>End Date</th>
                                <th scope='col'>
                                    <select value={status}
                                        
                                        onChange={handleChange}
                                    >
                                        <option value="{p.status}">{p.status}</option>
                                        <option value="Pending">Pending</option>
                                        <option value="In-progress">In-progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                    <button onClick={() => handleStatusUpdate(p.id, status)}>Update Status</button>

                                </th>
                                <th>
                                    <button>Edit</button>
                                    <button onClick={() => handleDelete(p.id)}>Delete</button>


                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboarddd
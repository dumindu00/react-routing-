// import { useParams } from "react-router-dom"

import { useLoaderData } from "react-router-dom"

const JobDetails = () => {

    // const {id} = useParams()

    const JobDetails = useLoaderData()


  return (
    <div className="job-details">
        <p><b>Job Title:</b>{JobDetails.title}</p>
        <p><b>Job Salary:</b>{JobDetails.salary}</p>
        <p><b>Job Location:</b>{JobDetails.location}</p>
        <p><b>Job Description:</b>Lorem ipsum dolor sit amet consectetur 
                                  adipisicing elittes, maxime, fugiat eligendi quas aut 
                                  tempotempora eaque. Repellendus culpa ipsum quia numquam!
                                  </p>
                                
                                <button>Apply Now!</button>
    </div>
  )
}

export default JobDetails



export const jobDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch("http://localhost:5000/jobs/" + id)
    
    if(!res.ok){
      throw Error("Could not found job details!")
    }
    
    
    return res.json();
}
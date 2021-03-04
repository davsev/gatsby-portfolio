import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const data = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        id
        date
        company
        position
        strapiId
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
const {allStrapiJobs:{nodes:jobs}} = useStaticQuery(data)
const [value, setValue] = React.useState(0);
const {company,position, date, desc} = jobs[value];
// console.log(value);

  return <section className="section jobs">
    <Title title="expierence"></Title>
      <div className="jobs-center">
      {/* btn container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return(
              <button key={job.strapiId} className={`job-btn ${index === value && "active-btn"}`}
              onClick={() => setValue(index)}
              >{job.company}</button>
            )
          })}
        </div>
      {/* job info */}
          <div>
            {company}
            {position}
            {date}
            {desc.map((item)=> {
              return( <div key={item.id}>
                <FaAngleDoubleRight></FaAngleDoubleRight>{item.name}
                </div>

              )
            })}
          </div>
      </div>
      <Link to="/about" className="btn center-btn">about</Link>
  </section>
}

export default Jobs

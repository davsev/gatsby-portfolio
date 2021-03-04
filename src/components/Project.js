import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ github,id, featured, url, strapiId ,name, description, stack, image, index}) => {
  return <article className="project">
    <Image fluid={image.childImageSharp.fluid} className="project-img"></Image>
    <div className="project-info">
      <span className="project-number"> 0{index + 1}</span>
      <h3>{name}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {stack.map((item) => {
          return(
            <span key={item.id} className="">{item.title}</span>
          )
        })}
      </div>
      <div className="project-links">
        {url &&
          
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        }
       
        {github &&
          
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
        }

      </div>
    </div>
  </article>
}

Project.propTypes = {}

export default Project

import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid


const ProjectsPage = ({data}) => {
  const {allStrapiProjects:{nodes:projects}} = data
  console.log('query', data)

  return <Layout>
    <section className="projects-page"></section>
    <Projects projects={projects} title="ALL projects" />
  </Layout>
}

export const query = graphql`
{
  allStrapiProjects {
    nodes {
      github
      id
      featured
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      url
      strapiId
      name
      description
      stack {
        title
        id
      }
    }
  }
}
`
export default ProjectsPage

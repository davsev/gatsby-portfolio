import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

// DATA IS projectsQuery FROM LINE 22
export default ({data}) => {
  const {
    allStrapiProjects:{nodes:projects},
    allStrapiBlogs:{nodes:blogs}
  } = data
  
  
  return <Layout>
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title="featured projects" showLink />
    <Blogs blogs={blogs} title="last blogs" showLink />
  </Layout>
}

export const projectsQuery = graphql`
{
  allStrapiProjects(filter: {featured: {eq: true}}) {
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
  allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
    nodes {
      date(formatString: "MMMM Do, YYYY")
      desc
      id
      title
      slug
      category
      content
      image {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
// ...GatsbyImageSharpFluid

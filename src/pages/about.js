import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid



const About = ({
  data:{
    about:{ nodes }
  }
}) => {
  const{desc, title, image, stack} = nodes[0]

  return <Layout>
    <section>
     
      {image &&
        <Image fluid={image.childImageSharp.fluid}
        className="about-img" />
      }
      <article className="about-text">
        <Title title={title} />
        <p>{desc}</p>
        <div className="about-stack">
        {stack.map((item)=> {
          return(
            <span key={item.id}>{item.title}</span>
          )
        })}
        </div>
      </article>
    </section>
  </Layout>
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        desc
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
  `


export default About

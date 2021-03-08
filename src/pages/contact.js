import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
  <section className="contact-page">      
    <article className="contact-form center-section">
      <div className="form-group">
        <input 
          type="text"
          name=""
          placeholder="name"
          className="form-control"
        />
        <input 
          type="email"
          name=""
          placeholder="email"
          className="form-control"
        />
        <textarea 
          type="text"
          rows="5"
          placeholder="name"
          className="form-control"
        >
        </textarea>
      </div>
      <button type="submit" className="submit-btn btn">submit</button>
    </article>
    </section>
  </Layout>

}

export default contact

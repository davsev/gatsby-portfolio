import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer" s title="this is the footer">
  <div>
    <SocialLinks  styleClass="footer-links"></SocialLinks>
    <h4>some test{new Date().getFullYear()}</h4>
  </div>
  </footer>
}

export default Footer

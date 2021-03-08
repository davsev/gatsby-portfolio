import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSideabar=()=>{
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Navbar toggleSideabar={toggleSideabar} />
      <Sidebar isOpen={isOpen} toggleSideabar={toggleSideabar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout

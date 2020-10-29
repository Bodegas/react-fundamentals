// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from "react"
import "../box-styles.css"

const Box = ({size, style, children}) => {
  let className = ""
  switch (size) {
    case "small":
      className = "box--small"
      break
    case "medium":
      className = "box--medium"
      break
    case "large":
      className = "box--large"
      break
    default:
      className = ""
  }

  return (
    <div className={`box ${className}`} style={{fontStyle: "italic", ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: "lightblue"}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: "pink"}}>
        small lightblue box
      </Box>
      <Box size="large" style={{backgroundColor: "orange"}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App

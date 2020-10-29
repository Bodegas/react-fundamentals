// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from "react"
import "../box-styles.css"

const Box = ({className, style, children}) => {
  return (
    <div className={`box ${className}`} style={{fontStyle: "italic", ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: "lightblue"}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: "pink"}}>
        small lightblue box
      </Box>
      <Box className="box--large" style={{backgroundColor: "orange"}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App

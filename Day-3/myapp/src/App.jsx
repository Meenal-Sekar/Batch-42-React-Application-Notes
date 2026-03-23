import React from 'react'
import StudentCard from './StudentCard'
import Condition from './Condition'
const App = () => {
  return (
    
      <>

        <Condition/>
      <h1>Student Report Card</h1>
      
      
      <StudentCard name="Meena" course="FSD" score="85" />
      <StudentCard name="Arun" course="React" score="90" />
      <StudentCard name="Divya" course="Python" score="88" />

    
      </>

    
  )
}

export default App



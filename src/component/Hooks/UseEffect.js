import React, { useEffect } from 'react'
import './Style.css'
const UseEffect =() => {
    const initialData=10

    // use effect is used to show some data for first time only by using []
    useEffect(() =>{
      document.title = `Chat(${myNum})`
    }, )
    
    const [myNum,setMyNum] = React.useState(0)
  return (
    <div>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() =>setMyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        
      </div>
    </div>
  )
}

export default UseEffect

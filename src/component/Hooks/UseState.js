import React from 'react'
import './Style.css'
const UseState =() => {
    const initialData=10
    const [myNum,setMyNum] = React.useState(initialData)
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
        <div className="button2" 
        onClick={() => (myNum>0 ? setMyNum(myNum-1):setMyNum(0))}>
        <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
      </div>
    </div>
  )
}

export default UseState

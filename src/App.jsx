import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slice/productSlice'

function App() {

  let dispatch = useDispatch()
  let data = useSelector((state)=>state.counter.value)
  

  let handleIncrement = () =>{
    dispatch(increment())
  }

  let handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
    <div className=" ">
    <h3 className='font-bold text-[35px] pb-4 text-[#262626]'>Quantity</h3>
    <div className="flex mx-auto border-2 border-[#262626] w-[150px] h-[50px] items-center justify-around ">
       
       <button className='' onClick={handleDecrement}>-</button>
       <h3 className=''>{data}</h3>
       <button className='' onClick={handleIncrement}>+</button>
       
      
     </div>


    </div>
   
    </>
  )
}

export default App

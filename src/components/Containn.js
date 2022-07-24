import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { decNumber, incNumber, reset } from '../Actions/Index'


const Containn = () => {
  const mystate = (useSelector)((state)=> state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div>
      <div className='quantity'>

<button onClick={()=> dispatch(decNumber())} className='quanitity-minus' title='decrement'>  -</button>
<input name='quantity' type='text' value={mystate}/>
<button onClick={()=> dispatch(incNumber())} className='quanitity-plus' title='inccrement'>  +</button>
<button onClick={()=> dispatch(reset())} className='quanitity-plus' title='inccrement'>  =</button>
</div>
    </div>
  )
}

export default Containn
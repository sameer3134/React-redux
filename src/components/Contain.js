import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { deNumber, inNumber} from '../Actions/Index'


const Contain = () => {
  const mystate = (useSelector)((state)=> state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div>
      <div className='quantity'>

<button onClick={()=> dispatch(deNumber())} className='quanitity-minus' title='decrement'>  -</button>
<input name='quantity' type='text' value={mystate}/>
<button onClick={()=> dispatch(inNumber())} className='quanitity-plus' title='inccrement'>  +</button>
</div>
    </div>
  )
}

export default Contain
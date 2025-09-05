import React, { useContext, useState } from 'react'
import { DateRangeContext } from '../context/DateRangeContext';

export default function Form() {
  const {setFirstDay,setCountDays} = useContext(DateRangeContext);
      const [day,setDay] = useState('');
      const [number,setNumber] = useState('');

      const handledClick = ()=>{
        setFirstDay(day);
        setCountDays(number);
      }
  return (
    <section>
      <input type="date" onChange={(e)=>setDay(e.target.value)}/>
      <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={handledClick}>Buscar</button>
    </section>
  )
}

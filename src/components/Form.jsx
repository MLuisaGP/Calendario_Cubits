import React, { useContext, useState } from 'react'
import { DateRangeContext } from '../context/DateRangeContext';

export default function Form() {
  const { setFirstDay, setCountDays } = useContext(DateRangeContext);
  const [day, setDay] = useState('');
  const [number, setNumber] = useState('');

  const handledClick = () => {
    setFirstDay(day);
    setCountDays(number);
  }
  return (
    <section className='form'>
      <div>
        <label htmlFor="date">Fecha Inicio:</label>
        <input id='date' name='date' className='input' type="date" onChange={(e) => setDay(e.target.value)} />
      </div>
      <div>
        <label htmlFor="date">Dias a mostrar:</label>
        <input id='number' className='input' type="number" onChange={(e) => setNumber(e.target.value)} />
      </div>
      <div className='form--btn'>
        <button className='btns_elemt' onClick={handledClick}>Buscar</button>
      </div>
    </section>
  )
}

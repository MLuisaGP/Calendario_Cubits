import React from 'react'
import { crearFechaLocal } from '../Utils/crearFechaLocal'
import { esDiaFestivo } from '../Utils/festivos';

export default function DateCalendar({day,marketDay}) {

  const fecha = day ?crearFechaLocal(day):'';
  const dayF = day? fecha.getDate():'';
  const weekday = day? fecha.getDay():'';
  let color = marketDay?'marcado':'normal';
  if(marketDay && [0,6].includes(weekday)){
    color = 'fin';
  }
  if(marketDay && esDiaFestivo(day)){
    color = 'festivo';
  }
  // console.log(weekday);
  
  return (
    <>
    <div className={`calendar_day ${color}`} >{dayF}</div>
    </>
  )
}

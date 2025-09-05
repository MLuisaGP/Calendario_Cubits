import React from 'react'
import { crearFechaLocal } from '../Utils/crearFechaLocal'
import { esDiaFestivo } from '../Utils/festivos';

export default function DateCalendar({day,marketDay}) {

  const fecha = day ?crearFechaLocal(day):'';
  const dayF = day? fecha.getDate():'';
  const weekday = day? fecha.getDay():'';
  let color = marketDay?'green':'gray';
  if(marketDay && [0,6].includes(weekday)){
    color = 'yellow';
  }
  if(marketDay && esDiaFestivo(day)){
    color = 'orange';
  }
  // console.log(weekday);
  
  return (
    <>
    <div style={{ 'color':color}}>{dayF}</div>
    </>
  )
}

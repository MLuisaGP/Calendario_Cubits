import React from 'react'
import { crearFechaLocal } from '../Utils/crearFechaLocal'

export default function DateCalendar({day,marketDay}) {
  const fecha = day ?crearFechaLocal(day):'';
  const dayF = day? fecha.getDate():'';
  return (
    <>
    <div >{dayF}</div>
    <div >{marketDay?<p>Si</p>:<p>No</p>}</div>
    </>
  )
}

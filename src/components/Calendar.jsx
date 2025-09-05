import React from 'react';
import DateCalendar from './DateCalendar';
import { crearFechaLocal } from '../Utils/crearFechaLocal';


const getMonthDays = (month, year) => {
  const monthFirstDay = new Date(year, month, 1).getDay();
  const monthDays = new Date(year, month + 1, 0).getDate(); // ← corregido aquí
  const days = [];

  // Ponemos en vacío los días anteriores al primer día del mes
  for (let i = 0; i < monthFirstDay; i++) {
    days.push(null);
  }

  // Almacenamos los días del mes en el array con formato 'YYYY-MM-DD'
  for (let i = 1; i <= monthDays; i++) {
    const dayStr = String(i).padStart(2, '0');
    const monthStr = String(month + 1).padStart(2, '0');
    days.push(`${year}-${monthStr}-${dayStr}`);
  }

  return days;
};

const dateRange = (beginDate, numberDays) => {
  const dates = [];
  const day = crearFechaLocal(beginDate); // ← corregido aquí

  for (let i = 0; i < numberDays; i++) {
    const date = new Date(day);
    date.setDate(day.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }

  return dates;
};

export default function Calendar({ firstDay, count }) {
  const monthsNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const weekdaysNames = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ];

  const date = crearFechaLocal(firstDay); // ← corregido aquí
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthDays = getMonthDays(month, year);

  const rows = [];
  let row = [];
  for (let i = 0; i < monthDays.length; i++) {
    row.push(monthDays[i]);
    if (row.length === 7) {
      rows.push(row);
      row = [];
    }
  }
  if (row.length > 0) {
    rows.push(row);
  }

  const marketDays = dateRange(firstDay, count);

  return (
    <article className='calendar'>
      <header className='calendar__header'>
        <h2>{`${monthsNames[month]} ${year}`}</h2>
      </header>
      <table>
        <thead>
          <tr>
            {weekdaysNames.map((weekday, index) => (
              <th key={index}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((day, idx) => (
                <td key={idx}>
                  <DateCalendar
                    day={day}
                    marketDay={day && marketDays.includes(day)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

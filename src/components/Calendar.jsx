import React, { useContext } from 'react';
import DateCalendar from './DateCalendar';
import { getMonthDays } from '../Utils/getMonthDay';
import { DateRangeContext } from '../context/DateRangeContext';
export default function Calendar({ month, year }) {
  const {marketDays} = useContext(DateRangeContext);
  const monthsNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const weekdaysNames = [
    'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sá'
  ];

//   const date = crearFechaLocal(firstDay); // ← corregido aquí
//   const month = date.getMonth();
//   const year = date.getFullYear();

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
    const faltantes = 7-row.length;
    row = row.concat(new Array(faltantes).fill(null));
    rows.push(row);
  }

  

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

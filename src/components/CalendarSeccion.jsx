import React, { useContext, useEffect, useState } from 'react'
import { crearFechaLocal, crearFechaLocalHoy } from '../Utils/crearFechaLocal';
import Calendar from './Calendar';
import { DateRangeContext } from '../context/DateRangeContext';

export default function CalendarSeccion() {
    const {firstDay} = useContext(DateRangeContext);
    const [month, setMonth] = useState(crearFechaLocalHoy().getMonth()); // 0 = Enero, 11 = Diciembre
    const [year, setYear] = useState(crearFechaLocalHoy().getFullYear());

    useEffect(()=>{
        if(firstDay){
            setMonth(crearFechaLocal(firstDay).getMonth())
        }
    },[firstDay])

    const handledMes = (inc) => {
        let newMonth = month + inc;
        let newYear = year;
        if (newMonth < 0) {
            setMonth(11);
            setYear(prev => prev - 1)
        } else if (newMonth > 11) {
            setMonth(0);
            setYear(prev => prev + 1)
        } else {
            setMonth(newMonth);
            setYear(newYear)
        }
    }
    return (
        <>
            <Calendar month={month} year={year} />
            <button onClick={() => handledMes(-1)}>Mes Anterior</button>
            <button onClick={() => handledMes(1)}>Mes Proximo</button>
        </>
    )
}



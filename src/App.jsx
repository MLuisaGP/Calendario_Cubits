import { useState } from 'react';
import './App.css'
import Calendar from './components/Calendar'
import Form from './components/Form'
import { crearFechaLocalHoy } from './Utils/crearFechaLocal';
import { DateRangeProvider } from './providers/DateRangeProvider';

function App() {
  const [month, setMonth] = useState(crearFechaLocalHoy().getMonth()); // 0 = Enero, 11 = Diciembre
  const [year, setYear] = useState(crearFechaLocalHoy().getFullYear());

  const handledMes = (inc)=>{
    let newMonth = month + inc;
    let newYear = year;
    if(newMonth<0){
      setMonth(11);
      setYear(prev=>prev-1)
    }else if(newMonth>11){
      setMonth(0);
      setYear(prev=>prev+1)
    }else{
      setMonth(newMonth);
      setYear(newYear)
    }
  }
  return (
    <DateRangeProvider>
      <h1>Calendario Mensual</h1>
      <Form />
      <Calendar month={month} year={year}/>
      <button onClick={()=>handledMes(-1)}>Mes Anterior</button>
      <button onClick={()=>handledMes(1)}>Mes Proximo</button>
    </DateRangeProvider>
  )
}

export default App


import './App.css'
import Calendar from './components/Calendar'
import Form from './components/Form'
import { DateRangeProvider } from './providers/DateRangeProvider';
import CalendarSeccion from './components/CalendarSeccion';

function App() {

  return (
    <DateRangeProvider>
      <h1>Calendario Mensual</h1>
      <Form />
      <CalendarSeccion />
    </DateRangeProvider>
  )
}

export default App

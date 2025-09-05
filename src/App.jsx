import './App.css'
import Calendar from './components/Calendar'
import Form from './components/Form'

function App() {

  return (
    <>
      <h1>Calendario Mensual</h1>
      <Form />
      <Calendar firstDay={'2025-09-04'} count={5}/>
    </>
  )
}

export default App

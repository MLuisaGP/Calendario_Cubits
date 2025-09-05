import { crearFechaLocal } from "./crearFechaLocal";

const festivos =[
    '01-01',
    '02-05',
    '03-18',
    '05-01',
    '09-16',
    '11-20',
    '12-25',
]
export function esDiaFestivo(fecha) {
    console.log(fecha);
    
  const date = crearFechaLocal(fecha);
  const mes = String(date.getMonth() + 1).padStart(2, '0'); // meses: 0-based
  const dia = String(date.getDate()).padStart(2, '0');
  const mmdd = `${mes}-${dia}`;

  return festivos.includes(mmdd);
}
import { crearFechaLocal } from "../Utils/crearFechaLocal";

export const dateRange = (beginDate, numberDays) => {
  const dates = [];
  const day = crearFechaLocal(beginDate); // ← corregido aquí

  for (let i = 0; i < numberDays; i++) {
    const date = new Date(day);
    date.setDate(day.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }

  return dates;
};

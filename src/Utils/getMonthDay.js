export const getMonthDays = (month, year) => {
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
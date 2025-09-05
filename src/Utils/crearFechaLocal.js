export function crearFechaLocal(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // mes: 0-based
}
export function crearFechaLocalHoy() {
    const hoy = new Date();
    const hoyFormato = hoy.toISOString().split('T')[0]; // "YYYY-MM-DD"
    const fechaLocal = crearFechaLocal(hoyFormato);
    return fechaLocal;
}
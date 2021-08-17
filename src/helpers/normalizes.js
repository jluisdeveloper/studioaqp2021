export function normalizeDate(date) {
  const aux = new Date(date)
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return aux.toLocaleDateString('es-ES', options);
}
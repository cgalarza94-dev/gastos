const gastos = [
  { descripcion: "Carne",  monto: 25000, pagoPor: "Sofía" },
  { descripcion: "Vino",   monto: 12000, pagoPor: "Martín" },
  { descripcion: "Hielo",  monto: 3000,  pagoPor: "Sofía" }
];

for (const gasto of gastos) {
  console.log(`${gasto.pagoPor} pagó ${gasto.monto} de ${gasto.descripcion}`);
}
const gastos = [
  { descripcion: "Carne",  monto: 25000, pagoPor: "Sofía" },
  { descripcion: "Vino",   monto: 12000, pagoPor: "Martín" },
  { descripcion: "Hielo",  monto: 3000,  pagoPor: "Sofía" }
];

// a) Gastos que pagó Sofía
const deSofia = gastos.filter((g) => g.pagoPor === "Sofía");
console.log("a)", deSofia);

// b) Solo los montos
const montos = gastos.map((g) => g.monto);
console.log("b)", montos);

// c) Total de todos los gastos
const total = gastos.reduce((acum, g) => acum + g.monto, 0);
console.log("c)", total);

// d) Total que puso Sofía (filter + reduce encadenados)
const totalSofia = gastos
  .filter((g) => g.pagoPor === "Sofía")
  .reduce((acum, g) => acum + g.monto, 0);
console.log("d)", totalSofia);
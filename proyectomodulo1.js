const gastos = [
  { descripcion: "Carne",  monto: 25000, pagoPor: "Sofía",  participantes: ["Sofía", "Martín", "Juan"] },
  { descripcion: "Vino",   monto: 12000, pagoPor: "Martín", participantes: ["Sofía", "Martín", "Juan"] },
  { descripcion: "Hielo",  monto: 3000,  pagoPor: "Sofía",  participantes: ["Sofía", "Martín"] },
  { descripcion: "Postre", monto: 9000,  pagoPor: "Juan",   participantes: ["Sofía", "Martín", "Juan"] }
];

const personas = ["Sofía", "Martín", "Juan"];

const calcularSaldos = (gastos, personas) => {
  return personas.map((persona) => {

    // 1) Cuánto puso: sumo los gastos que pagó esta persona
    const puso = gastos
      .filter((g) => g.pagoPor === persona)
      .reduce((acum, g) => acum + g.monto, 0);

    // 2) Cuánto le tocaba: de cada gasto en el que participó,
    //    sumo su parte (monto dividido cantidad de participantes)
    const leTocaba = gastos
      .filter((g) => g.participantes.includes(persona))
      .reduce((acum, g) => acum + g.monto / g.participantes.length, 0);

    // 3) El saldo: lo que puso menos lo que le tocaba
    return {
      persona,
      puso,
      leTocaba: Math.round(leTocaba),
      saldo: Math.round(puso - leTocaba)
    };
  });
};

const saldos = calcularSaldos(gastos, personas);

for (const s of saldos) {
  const estado = s.saldo >= 0 ? `le deben ${s.saldo}` : `debe ${-s.saldo}`;
  console.log(`${s.persona}: puso ${s.puso}, le tocaba ${s.leTocaba} → ${estado}`);
}

// Verificación: los saldos tienen que sumar 0
const verificacion = saldos.reduce((acum, s) => acum + s.saldo, 0);
console.log("Suma de saldos (debe dar 0):", verificacion);
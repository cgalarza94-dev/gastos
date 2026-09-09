console.log("1. Arranca el programa");

const traerChiste = async () => {
  console.log("2. Antes de pedir el chiste...");
  const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
  const datos = await respuesta.json();
  console.log("4. El chiste es:", datos.value);
};

traerChiste();

console.log("3. Esto se ejecuta mientras se espera el chiste");
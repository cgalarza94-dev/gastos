function App() {
  const nombre = "Carlos Galarza";
  const fecha = new Date().toLocaleDateString();

  return (
    <div>
      <h1>Hola {nombre}</h1>
      <p>Hoy es {fecha}</p>
    </div>
  );
}

export default App;

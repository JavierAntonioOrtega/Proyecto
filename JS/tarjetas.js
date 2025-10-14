const tarjetero = document.querySelector(".tarjetero");
const agregarBtn = document.querySelector(".agregarTarjeta");

function crearNuevaTarjeta() {
    const nuevaTarjeta = document.createElement('ol');
    nuevaTarjeta.className = 'tarjeta';
    nuevaTarjeta.innerHTML = `
        <li>
            <input type="checkbox" id="newObj">
            <label for="newObj">Nuevo Objetivo</label>
        </li>`;
    tarjetero.insertBefore(nuevaTarjeta, agregarBtn);
}
export { crearNuevaTarjeta };
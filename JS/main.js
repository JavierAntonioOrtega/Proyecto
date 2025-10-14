import { crearNuevaTarjeta } from './tarjetas.js';

let intervalo;
let tiempo = 0;
let enMarcha = false;
const tiempoDisplay = document.getElementById('tiempo');

function actualizarCronometro() {
    const horas = String(Math.floor(tiempo / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((tiempo % 3600) / 60)).padStart(2, '0');
    const segundos = String(tiempo % 60).padStart(2, '0');
    document.getElementById('tiempo').textContent = `${horas}:${minutos}:${segundos}`;
}

function iniciarCronometro() {
    if (!enMarcha) {
        intervalo = setInterval(() => {
            tiempo++;
            actualizarCronometro();
        }, 1000);
        enMarcha = true;
        tiempoDisplay.classList.add('activo');
    }
}

function pausarCronometro() {
    clearInterval(intervalo);
    enMarcha = false;
    tiempoDisplay.classList.remove('activo');
}

function reiniciarCronometro() {
    clearInterval(intervalo);
    tiempo = 0;
    actualizarCronometro();
    enMarcha = false;
    tiempoDisplay.classList.remove('activo');
}

const agregarTarjetaBtn = document.querySelector('.agregarTarjeta');
agregarTarjetaBtn.addEventListener('click', crearNuevaTarjeta);
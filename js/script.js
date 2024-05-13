document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.querySelector('.carrusel');
    const grupos = carrusel.querySelectorAll('.grupo-imagenes');
    const indicadores = document.querySelectorAll('.indicadores .indicador');

    let indiceGrupoActual = 0;
    let intervalo;

    function cambiarGrupo(indice) {
        grupos.forEach((grupo, index) => {
            if (index === indice) {
                grupo.style.display = 'block';
            } else {
                grupo.style.display = 'none';
            }
        });
    }

    function activarIndicador(indice) {
        indicadores.forEach((indicador, index) => {
            if (index === indice) {
                indicador.classList.add('activo');
            } else {
                indicador.classList.remove('activo');
            }
        });
    }

    function avanzarGrupo() {
        indiceGrupoActual++;
        if (indiceGrupoActual >= grupos.length) {
            indiceGrupoActual = 0;
        }
        cambiarGrupo(indiceGrupoActual);
        activarIndicador(indiceGrupoActual);
    }

    function iniciarCarruselAutomatico() {
        intervalo = setInterval(avanzarGrupo, 2000);
    }

    function detenerCarruselAutomatico() {
        clearInterval(intervalo);
    }

    // Agregar listener para el cambio de grupo al hacer clic en los indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            cambiarGrupo(index);
            activarIndicador(index);
            detenerCarruselAutomatico();
        });
    });

    // Iniciar el carrusel
    cambiarGrupo(indiceGrupoActual);
    activarIndicador(indiceGrupoActual);
    iniciarCarruselAutomatico();
});

document.addEventListener('DOMContentLoaded', function () {
    const nuevoCarrusel = document.querySelector('.nuevo-carrusel');
    const grupos = nuevoCarrusel.querySelectorAll('.grupo-imagenes');
    const indicadores = document.querySelectorAll('.nuevo-indicadores .indicador');

    let indiceGrupoActual = 0;
    let intervalo;

    function cambiarGrupo(indice) {
        grupos.forEach((grupo, index) => {
            if (index === indice) {
                grupo.style.display = 'flex';
            } else {
                grupo.style.display = 'none';
            }
        });
    }

    function activarIndicador(indice) {
        indicadores.forEach((indicador, index) => {
            if (index === indice) {
                indicador.classList.add('activo');
            } else {
                indicador.classList.remove('activo');
            }
        });
    }

    function avanzarGrupo() {
        indiceGrupoActual++;
        if (indiceGrupoActual >= grupos.length) {
            indiceGrupoActual = 0;
        }
        cambiarGrupo(indiceGrupoActual);
        activarIndicador(indiceGrupoActual);
    }

    function iniciarCarruselAutomatico() {
        intervalo = setInterval(avanzarGrupo, 2000);
    }

    function detenerCarruselAutomatico() {
        clearInterval(intervalo);
    }

    // Agregar listener para el cambio de grupo al hacer clic en los indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            cambiarGrupo(index);
            activarIndicador(index);
            detenerCarruselAutomatico();
        });
    });

    // Iniciar el carrusel
    cambiarGrupo(indiceGrupoActual);
    activarIndicador(indiceGrupoActual);
    iniciarCarruselAutomatico();
});

document.addEventListener('DOMContentLoaded', function () {
    const carrusel03 = document.querySelector('.carrusel03');
    const grupos = carrusel03.querySelectorAll('.grupo-imagenes');
    const indicadores = document.querySelectorAll('.carrusel03-indicadores .indicador');

    let indiceGrupoActual = 0;
    let intervalo;

    function cambiarGrupo(indice) {
        grupos.forEach((grupo, index) => {
            if (index === indice) {
                grupo.style.display = 'flex';
            } else {
                grupo.style.display = 'none';
            }
        });
    }

    function activarIndicador(indice) {
        indicadores.forEach((indicador, index) => {
            if (index === indice) {
                indicador.classList.add('activo');
            } else {
                indicador.classList.remove('activo');
            }
        });
    }

    function avanzarGrupo() {
        indiceGrupoActual++;
        if (indiceGrupoActual >= grupos.length) {
            indiceGrupoActual = 0;
        }
        cambiarGrupo(indiceGrupoActual);
        activarIndicador(indiceGrupoActual);
    }

    function iniciarCarruselAutomatico() {
        intervalo = setInterval(avanzarGrupo, 2000);
    }

    function detenerCarruselAutomatico() {
        clearInterval(intervalo);
    }

    // Agregar listener para el cambio de grupo al hacer clic en los indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            cambiarGrupo(index);
            activarIndicador(index);
            detenerCarruselAutomatico();
        });
    });

    // Iniciar el carrusel
    cambiarGrupo(indiceGrupoActual);
    activarIndicador(indiceGrupoActual);
    iniciarCarruselAutomatico();
});


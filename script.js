// Temporizador de 48 horas
function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            display.textContent = "¡ES HOY!";
        }
    }, 1000);
}

window.onload = function () {
    var fortyEightHours = 48 * 60 * 60; // 48 horas en segundos
    var display = document.querySelector('#timer');
    startTimer(fortyEightHours, display);
};

// Función para abrir/cerrar acordeón
function toggleCard(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('i');
    
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    } else {
        content.style.display = "block";
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }
}

// Función para mostrar respuestas del simulacro
function showAnswer(id) {
    const answer = document.getElementById(id);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
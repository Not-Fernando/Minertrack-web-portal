document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 MinerTrack Enterprise activado.");
    console.log("🌐 Entorno: Servidor Estático NGINX");

    // Efecto suave de scroll para el botón de comenzar
    const btnStart = document.querySelector('a[href^="#"]');
    if(btnStart) {
        btnStart.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
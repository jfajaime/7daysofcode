document.getElementById('dia1').addEventListener('click', function() {
    loadScript('/scripts/1daysofcode.js');
});

document.getElementById('dia2').addEventListener('click', function() {
    loadScript('/scripts/2daysofcode.js');
});

document.getElementById('dia3').addEventListener('click', function() {
    loadScript('scripts/3daysofcode.js');
});
document.getElementById('dia4').addEventListener('click', function() {
    loadScript('scripts/4daysofcode.js');
});
// document.getElementById('dia5').addEventListener('click', function() {
//     loadScript('scripts/5daysofcode.js');
// });
// document.getElementById('dia6').addEventListener('click', function() {
//     loadScript('scripts/6daysofcode.js');
// });
// document.getElementById('dia7').addEventListener('click', function() {
//     loadScript('scripts/7daysofcode.js');
// });

// Función para cargar y ejecutar un script
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

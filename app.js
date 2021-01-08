let info = document.querySelector("#info");
let cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursormove);

function cursormove(e) {
    cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
}
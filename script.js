document.addEventListener("DOMContentLoaded", () => {
  const fecha = new Date(2025, 11, 10, 0, 0, 0).getTime();

  const act = () => {
    const ahora = Date.now();
    const dif = fecha - ahora;

    if (dif <= 0) {
      clearInterval(intv);
      document.querySelector(".tiempo").textContent = "¡Ya está disponible!";
      return;
    }

    const d = Math.floor(dif / (1000 * 60 * 60 * 24));
    const h = Math.floor((dif / (1000 * 60 * 60)) % 24);
    const m = Math.floor((dif / (1000 * 60)) % 60);
    const s = Math.floor((dif / 1000) % 60);

    document.getElementById("dias").textContent = d.toString().padStart(2, '0');
    document.getElementById("horas").textContent = h.toString().padStart(2, '0');
    document.getElementById("min").textContent = m.toString().padStart(2, '0');
    document.getElementById("seg").textContent = s.toString().padStart(2, '0');
  };

  const intv = setInterval(act, 1000);
  act(); 
});

const preguntas = document.querySelectorAll(".faq-q");
preguntas.forEach(p => {
  p.addEventListener("click", () => {
    const r = p.nextElementSibling;
    r.style.display = (r.style.display === "block") ? "none" : "block";
  });
});

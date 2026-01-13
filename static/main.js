document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
  });
});

const swith = document.getElementById("switch");
const img = document.getElementById("img");

swith.addEventListener("change", () => {
  document.body.classList.toggle("dark", swith.checked);
  if (swith.checked) {
    img.style.transition = "background-color 0.3s ease, color 0.3s ease;";
    img.src = "static/whitelogo.png";
  } else {
    img.src = "static/logo.png";
  }
});

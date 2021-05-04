const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__content-inner") && event.target.id !== "openBtn") {
    modal.style.display = "none";
  }
});

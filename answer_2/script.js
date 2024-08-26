function showToast(type, message) {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <span class="toast-close-btn">&times;</span>
  `;

  const toastContainer = document.getElementById("toast-container");
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    hideToast(toast);
  }, 3000);

  toast.querySelector(".toast-close-btn").addEventListener("click", () => {
    hideToast(toast);
  });
}

function hideToast(toast) {
  toast.classList.add("hide");
  toast.addEventListener("transitionend", () => {
    toast.remove();
  });
}

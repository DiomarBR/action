window.addEventListener("load", () => {
  document.querySelectorAll(".abas nav a").forEach((a) => {
    a.addEventListener("click", () => {
      let f = a.parentNode.querySelector("a.focus");
      if (f) f.classList.remove("focus");
      a.classList.add("focus");
    });
  });
});

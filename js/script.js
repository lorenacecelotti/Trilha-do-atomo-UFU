// =========================================================
// TRILHA DO ÁTOMO — navegação do site
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const landing = document.getElementById("landing");
  const app = document.getElementById("app");
  const btnComecar = document.getElementById("btn-comecar");
  const btnVoltarInicio = document.getElementById("btn-voltar-inicio");

  // ---- Página inicial -> Menu principal ----
  btnComecar.addEventListener("click", () => {
    landing.classList.add("hidden");
    app.classList.remove("hidden");
    window.scrollTo(0, 0);
  });

  // ---- Menu principal -> Página inicial ----
  btnVoltarInicio.addEventListener("click", () => {
    app.classList.add("hidden");
    landing.classList.remove("hidden");
    window.scrollTo(0, 0);
  });

  // ---- Navegação entre as 6 abas principais ----
  const navItems = document.querySelectorAll(".nav-item");
  const tabPanels = document.querySelectorAll(".tab-panel");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-tab");

      navItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      tabPanels.forEach((panel) => {
        panel.classList.toggle("active", panel.id === "tab-" + target);
      });

      document.querySelector(".content").scrollTo(0, 0);
      window.scrollTo(0, 0);
    });
  });

  // ---- Navegação entre as sub-abas (Aula 1 a Aula 5) ----
  const subNavItems = document.querySelectorAll(".sub-nav-item");
  const aulaPanels = document.querySelectorAll(".aula-panel");

  subNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-aula");

      subNavItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      aulaPanels.forEach((panel) => {
        panel.classList.toggle("active", panel.id === target);
      });
    });
  });

});

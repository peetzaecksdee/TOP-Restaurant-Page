(()=>{"use strict";function e(e){document.querySelectorAll(".btn-nav").forEach((t=>{t!==e&&t.classList.remove("active")})),e.classList.add("active")}function t(e){const t=document.createElement("button");return t.classList.add("btn-nav"),t.textContent=e,t}!function(){const n=document.getElementById("content");n.appendChild(function(){const n=document.createElement("header"),a=document.createElement("nav");n.appendChild(a);const c=t("Home");c.classList.add("active"),c.addEventListener("click",(()=>{c.classList.contains("active")||e(c)}));const s=t("Menu");s.addEventListener("click",(()=>{s.classList.contains("active")||e(s)}));const d=t("Contact");return d.addEventListener("click",(()=>{d.classList.contains("active")||e(d)})),a.appendChild(c),a.appendChild(s),a.appendChild(d),n}()),n.appendChild(document.createElement("main")),n.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("span");t.textContent="Another day, another project",t.classList.add("credit");const n=document.createElement("a");n.href="https://github.com/peetzaecksdee",n.target="_blank",n.classList.add("credit-a");const a=document.createElement("img");return a.src="../assets/images/pizza.jpg",a.alt="My github",a.classList.add("credit-img"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),function(){const e=document.querySelector("main"),t=document.createElement("div");t.classList.add("home-container");const n=document.createElement("span");n.classList.add("title"),n.textContent="Peetza's Café";const a=document.createElement("span");a.classList.add("subtitle"),a.textContent="Truly Yours Café";const c=document.createElement("img");c.src="../assets/images/como-hacer-cafe.png",c.alt="Coffee",c.classList.add("img");const s=document.createElement("span");s.classList.add("subtitle"),s.textContent="Ensured the best quality",e.appendChild(t),t.appendChild(n),t.appendChild(a),t.appendChild(c),t.appendChild(s)}()}()})();
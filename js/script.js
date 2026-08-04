/* script.js｜採用LPテンプレート
   依存ライブラリなし。機能: ①ハンバーガーメニュー ②メニュー選択後に自動クローズ */
(function () {
  "use strict";

  var toggle = document.querySelector(".header__toggle");
  var nav = document.querySelector(".header__nav");
  if (!toggle || !nav) return;

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
})();

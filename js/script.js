/* script.js｜SAMPLE INC. 採用サイト
   依存なし。機能: ハンバーガーメニュー開閉 */
(function () {
  "use strict";
  var t = document.querySelector(".hdr__toggle"), n = document.querySelector(".hdr__nav");
  if (!t || !n) return;
  function set(open){
    t.setAttribute("aria-expanded", String(open));
    t.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    n.classList.toggle("is-open", open);
  }
  t.addEventListener("click", function(){ set(t.getAttribute("aria-expanded") !== "true"); });
  n.addEventListener("click", function(e){ if (e.target.closest("a")) set(false); });
})();

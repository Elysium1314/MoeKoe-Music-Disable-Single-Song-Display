(() => {
  const selector = ".library-page .favorite-section";
  const hide = () => document.querySelectorAll(selector).forEach(el => el.style.display = "none");
  hide();
  new MutationObserver(hide).observe(document.body, { childList: true, subtree: true });
})();
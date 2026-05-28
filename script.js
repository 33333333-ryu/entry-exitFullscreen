function minimize() {
    document.exitFullscreen()
}

const observer = new MutationObserver(() => {
  const el = document.querySelector(
    '.css-f39nal .minimize.fsView .entryMaximizeButtonMinimize'
  );

  if (el) {
    el.addEventListener('click', () => {
      minimize()
    });
  }
});

observer.observe(document.body, { childList: true, subtree: true });
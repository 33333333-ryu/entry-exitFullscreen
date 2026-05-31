let wasVisible = !!document.querySelector('.entryEngineButtonMinimize.entryMaximizeButtonMinimize');

new MutationObserver(() => {
  const isVisible = !!document.querySelector('.entryEngineButtonMinimize.entryMaximizeButtonMinimize');
  if (!wasVisible && isVisible) {
    document.exitFullscreen();
  }
  wasVisible = isVisible;
}).observe(document.body, { childList: true, subtree: true });

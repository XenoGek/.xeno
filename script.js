
// Backup redirect if meta refresh fails
setTimeout(() => {
  if (window.location.href === document.location.href) {
    window.location.href = 'https://phuketproperty.live/xeno/';
  }
}, 3500);

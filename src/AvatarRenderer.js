class AvatarRenderer {
  constructor(options) {
    this.container = options.container;
    this.avatarUrl = "";
    this.eventListeners = {};
  }

  async loadAvatar(avatarUrl) {
    this.avatarUrl = avatarUrl;
    const iframe = document.createElement("iframe");
    iframe.src = this.avatarUrl;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    this.container.appendChild(iframe);
  }

  on(event, callback) {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(callback);
  }

  emit(event, data) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].forEach((callback) => callback(data));
    }
  }
}

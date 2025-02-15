class DIDClient {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || "https://api.d-id.com";
  }

  async authenticate() {
    const response = await fetch(`${this.baseUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    const data = await response.json();
    return data.token;
  }

  async generateAvatar(avatarId) {
    const response = await fetch(`${this.baseUrl}/avatars/${avatarId}`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    const data = await response.json();
    return data.url;
  }
}

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(request) {
    const targetUrl = "https://join.havefun.store/iam/hW80StXBsWZCbBCs";

    const headers = new Headers();

    headers.set("User-Agent", "Sing-box/1.13.13");
    headers.set("X-Device-Os", "Android");
    headers.set("X-Device-Model", "INFINIX X6833B");
    headers.set("X-Ver-Os", "15");
    headers.set("X-Device-Locale", "ru");
    headers.set("X-Hwid", "64jf75nf8f5jr6je");
    headers.set("X-Real-Ip", "185.162.94.17");
    headers.set("X-Forwarded-For", "185.162.94.17");

    try {
      const response = await fetch(targetUrl, {
        method: "GET",
        headers,
      });

      const body = await response.text();

      const responseHeaders = new Headers(response.headers);

      responseHeaders.set("Profile-Title", "🕯️ VPN от Юрца");
      responseHeaders.set("announce", "✅ Пользуйтесь, друзья");
      responseHeaders.set(
        "profile-web-page-url",
        "https://t.me/monocrystal",
      );
      responseHeaders.set(
        "support-url",
        "https://t.me/monocrystal",
      );

      return new Response(body, {
        status: response.status,
        headers: responseHeaders,
      });
    } catch (error) {
      return new Response(`Proxy Error: ${error.message}`, {
        status: 500,
      });
    }
  },
};

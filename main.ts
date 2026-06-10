export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.searchParams.get("password") !== "vpn") {
      return new Response("Unauthorized", {
        status: 401,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    const targetUrl = "https://join.havefun.store/iam/hW80StXBsWZCbBCs";

    const modifiedHeaders = new Headers(request.headers);
    modifiedHeaders.delete("cf-connecting-ip");
    modifiedHeaders.delete("true-client-ip");
    modifiedHeaders.delete("x-forwarded-for");
    modifiedHeaders.set("User-Agent", "Sing-box/1.13.13");
    modifiedHeaders.set("X-Device-Os", "Android");
    modifiedHeaders.set("X-Device-Model", "INFINIX X6833B");
    modifiedHeaders.set("X-Ver-Os", "15");
    modifiedHeaders.set("X-Device-Locale", "ru");
    modifiedHeaders.set("X-Hwid", "64jf75nf8f5jr6je");
    modifiedHeaders.set("X-Real-Ip", "185.162.94.17");
    modifiedHeaders.set("X-Forwarded-For", "185.162.94.17");

    try {
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: modifiedHeaders,
        body: request.body
      });

      const body = await response.text();

      const headers = new Headers(response.headers);
      headers.set("Profile-Title", "🕯️ VPN от Юрца");
      headers.set("announce", "✅ Пользуйтесь, друзья");
      headers.set("profile-web-page-url", "https://t.me/monocrystal");
      headers.set("support-url", "https://t.me/monocrystal");
      headers.set("Content-Type", "text/plain; charset=utf-8");

      return new Response(body, {
        status: response.status,
        headers
      });
    } catch (error) {
      return new Response(`Proxy Error: ${error.message}`, {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }
  }
};

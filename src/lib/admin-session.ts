// Signed admin session cookie. Value: "<expiresAtSeconds>.<random>.<signature>", signed with
// HMAC-SHA256 using ADMIN_SESSION_SECRET. Uses Web Crypto so it works in middleware and route handlers.

export const ADMIN_COOKIE = "admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 1 week

const encoder = new TextEncoder();

function getSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  return secret && secret.length >= 32 ? secret : null;
}

function toBase64Url(bytes: ArrayBuffer | Uint8Array): string {
  const array = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (const byte of array) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sign(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return toBase64Url(await crypto.subtle.sign("HMAC", key, encoder.encode(data)));
}

/** Compares two strings without leaking where they differ. */
export async function safeEqual(a: string, b: string): Promise<boolean> {
  // Hash both so the comparison always covers equal-length values.
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(a)),
    crypto.subtle.digest("SHA-256", encoder.encode(b)),
  ]);
  const x = new Uint8Array(ha);
  const y = new Uint8Array(hb);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

/** True when login credentials and the session secret are all configured. */
export function isAdminConfigured(): boolean {
  return !!(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD && getSecret());
}

export async function createAdminSession(nowMs = Date.now()): Promise<string | null> {
  const secret = getSecret();
  if (!secret) return null;
  const expires = Math.floor(nowMs / 1000) + ADMIN_SESSION_MAX_AGE;
  const nonce = toBase64Url(crypto.getRandomValues(new Uint8Array(16)));
  const payload = `${expires}.${nonce}`;
  return `${payload}.${await sign(secret, payload)}`;
}

export async function verifyAdminSession(
  value: string | undefined,
  nowMs = Date.now(),
): Promise<boolean> {
  const secret = getSecret();
  if (!secret || !value) return false;
  const parts = value.split(".");
  if (parts.length !== 3) return false;
  const [expires, nonce, signature] = parts;
  if (!/^\d+$/.test(expires) || Number(expires) * 1000 <= nowMs) return false;
  return safeEqual(signature, await sign(secret, `${expires}.${nonce}`));
}

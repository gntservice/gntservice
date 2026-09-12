type Bucket = { count: number; resetAt: number };

const hits = new Map<string, Bucket>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX = 5;

export function rateLimit(key: string) {
  const now = Date.now();
  const current = hits.get(key);

  if (!current || now > current.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: MAX - 1 };
  }

  if (current.count >= MAX) {
    return { ok: false, remaining: 0, retryAfter: Math.ceil((current.resetAt - now) / 1000) };
  }

  current.count += 1;
  return { ok: true, remaining: MAX - current.count };
}

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

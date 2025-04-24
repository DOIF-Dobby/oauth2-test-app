let headersModule: typeof import("next/headers") | null = null;

export async function getCookiesStore() {
  if (!headersModule) {
    headersModule = await import("next/headers");
  }
  return headersModule.cookies();
}

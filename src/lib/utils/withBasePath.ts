// Static export does not prefix plain public/ paths (e.g. next/image src) with basePath
export function withBasePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

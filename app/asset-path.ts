export const BASE_PATH = "/cal-storm-case-study";

export function assetPath(path: string): string {
  return `${BASE_PATH}/${path.replace(/^\/+/, "")}`;
}

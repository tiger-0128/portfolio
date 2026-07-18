export function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0] ? [...parts[0]][0] : "?";
  const b = parts.length > 1 ? [...parts[parts.length - 1]][0] : "";
  return (a + b).toUpperCase();
}

export function starString(n: number) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

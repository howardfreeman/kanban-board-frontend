export function formatDate(date: Date) {
  return date.toLocaleDateString("en", {
    month: "short",
    day: "numeric",
  });
}

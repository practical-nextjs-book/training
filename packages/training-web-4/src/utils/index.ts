export function getPage(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  if (typeof searchParams.page !== "string") return 1;
  const page = parseInt(searchParams.page);
  if (isNaN(page)) return 1;
  if (page < 1) return 1;
  return page;
}

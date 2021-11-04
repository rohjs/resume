type FormatDateTimeOptions = {
  hyphenated?: boolean
}

export function formatDateTime(
  ts: number,
  options?: FormatDateTimeOptions
): string {
  const { hyphenated } = options || {}
  const parsedDate = new Date(ts)
  const date = [parsedDate.getFullYear(), parsedDate.getMonth() + 1]

  return date.join(hyphenated ? '-' : '.')
}

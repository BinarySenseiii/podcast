export function stripTags(text?: string) {
  return text
    ?.replace(/<[^>]*>?/gm, '')
    .replace(/\s\s+/g, ' ')
    .trim();
}

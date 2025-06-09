export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // remove invalid characters
    .replace(/\s+/g, '-')        // replace spaces with dashes
    .replace(/-+/g, '-')         // collapse multiple dashes
    .trim();
}
export function replaceBy(string: string, schema: Record<string, any>) {
  return string.replace(
    new RegExp(Object.keys(schema).join('|'), 'gi'),
    (matched) => schema[matched]
  );
}

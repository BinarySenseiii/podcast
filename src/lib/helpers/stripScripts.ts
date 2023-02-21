export function stripScripts(text?: string) {
  return text?.replace(/<script.*>.*<\/script>/ims, ' ');
}

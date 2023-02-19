export default function ({ hash }): object {
  if (hash.spread) {
    hash = { ...hash, ...hash.spread };
    delete hash.spread;
  }
  return hash;
}

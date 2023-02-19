export default function (name: string, options) {
  if (!name) {
    console.error('No name given.');
    return '';
  }
  return name;
}

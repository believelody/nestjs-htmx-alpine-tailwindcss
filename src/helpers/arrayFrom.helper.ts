export default function <T>(n: number, options): T[] {
  const newArray = [...Array(n)] as T[];
  return newArray;
}

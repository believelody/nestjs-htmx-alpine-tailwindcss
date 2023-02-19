import { HelperOptions } from 'handlebars';

interface Hash {
  [key: string]: any;
}

export default function (baseUrl, { hash }: HelperOptions): URL {
  const url: URL = new URL(baseUrl);
  Object.entries(hash as Hash).forEach(([key, value]) => {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
    }
    url.searchParams.append(key, value);
  });
  return url;
}

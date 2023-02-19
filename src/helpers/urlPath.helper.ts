export default (url: URL) => `${url.pathname}${url.search || ''}`;

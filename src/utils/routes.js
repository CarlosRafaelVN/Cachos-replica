export function appUrl(path) {
  if (!path?.startsWith('/') || path.startsWith('//')) return path;
  return `${import.meta.env.BASE_URL}${path.slice(1)}`;
}

export function appPathname() {
  const { pathname } = window.location;
  const base = import.meta.env.BASE_URL;
  const route = base !== '/' && pathname.startsWith(base)
    ? `/${pathname.slice(base.length)}`
    : pathname;

  return route.length > 1 ? route.replace(/\/+$/, '') : route;
}

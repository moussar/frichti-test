export function createCookie(name, value, days = 1, domain = null) {
  let cookie = `${name}=${value}; path=/; max-age=${60 * 60 * 24 * days};`;
  if (domain) cookie += ` domain=${domain};`;
  document.cookie = cookie;
}

export function readCookie(name) {
  if (typeof document === 'undefined') {
    return null;
  }

  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
}

export function eraseCookie(name) {
  createCookie(name, '', -1);
}

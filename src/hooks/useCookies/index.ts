interface CookieOptions {
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'Strict' | 'Lax' | 'None'
}

const getCookieValue = (name: string): string | null => {
  if (typeof document === 'undefined' || !document.cookie) {
    return null
  }

  const cookieString = document.cookie
  const nameEQ = name + '='
  const cookiesArray = cookieString.split(';')

  for (const cookie of cookiesArray) {
    const trimmedCookie = cookie.trim()
    if (trimmedCookie.startsWith(nameEQ)) {
      return decodeURIComponent(trimmedCookie.substring(nameEQ.length))
    }
  }

  return null
}

const setCookieValue = (
  name: string,
  value: string,
  options: CookieOptions = {}
): void => {
  const { expires, path, domain, secure, sameSite } = options || {}

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  if (expires) {
    let expirationDate: Date

    if (expires instanceof Date) {
      expirationDate = expires
    } else {
      expirationDate = new Date()
      expirationDate.setTime(
        expirationDate.getTime() + expires * 24 * 60 * 60 * 1000
      )
    }

    cookieString += `;expires=${expirationDate.toUTCString()}`
  }

  if (path) {
    cookieString += `;path=${path}`
  }

  if (domain) {
    cookieString += `;domain=${domain}`
  }

  if (secure) {
    cookieString += `;secure`
  }

  if (sameSite) {
    cookieString += `;SameSite=${sameSite}`
  }

  document.cookie = cookieString
}

const removeCookie = (name: string, options: Partial<CookieOptions> = {}) => {
  const { path, domain } = options

  let cookieString = `${encodeURIComponent(
    name
  )}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`

  if (path) {
    cookieString += `;path=${path}`
  }

  if (domain) {
    cookieString += `;domain=${domain}`
  }

  document.cookie = cookieString
}

export { getCookieValue, setCookieValue, removeCookie }
